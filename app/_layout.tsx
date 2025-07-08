import checkLogo from "@/assets/images/check.png";
import Task from "@/components/Task";
import { colors } from "@/constants/color";
import { style } from "@/styles/stylesheet";
import { useState } from "react";
import { Alert, FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

	const initialTasks = [
		{ id: 1, completed: true, text: "Fazer café" },
		{ id: 2, completed: false, text: "Estudar React Native" },
		{ id: 3, completed: false, text: "Academia" }
	]

export default function RootLayout() {

  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");

  const onPressButton = (message: string) => {
    Alert.alert(message);
  }

  const addTask = () => {
    const newTask = { id: tasks.length + 1, completed: false, text }
    if(!text.trim()) {
      Alert.alert("Por favor, digite uma tarefa.");
      return;
    }
    setTasks([...tasks, newTask]);
    setText("");
  }

  return (
  <>
    <GestureHandlerRootView>  
        <View style={style.mainContainer}>
          <View style={style.headerContainer}>
            <Image source={checkLogo} style={style.image1}/>
            <Text style={style.title}>Minhas Tarefas</Text>
          </View>
          <View style={style.taskWrapper}>
            <TextInput 
              placeholder="Digite sua tarefa" 
              style={style.input}
              value={text}
              onChangeText={setText} 
            />
          
            <Pressable
            onPress={() => addTask()}
            style={({pressed}) => [
              style.button,
              {backgroundColor: pressed ? colors.secondary : colors.primary}
            ]}
            >
              <Text style={style.buttonText}>+</Text>
          </Pressable>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
            <Task 
              text={item.text} 
              initialCompleted={item.completed}
              deleteTasks={() => setTasks(tasks.filter(task => task.id !== item.id))} 
            />
          )}
        />
      </View>
    </GestureHandlerRootView>
  </>
  )
}

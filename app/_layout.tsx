import checkLogo from "@/assets/images/check.png";
import Task from "@/components/Task";
import { colors } from "@/constants/color";
import { style } from "@/styles/stylesheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

	// const initialTasks = [
	// 	{ id: 1, completed: true, text: "Fazer café" },
	// 	{ id: 2, completed: false, text: "Estudar React Native" },
	// 	{ id: 3, completed: false, text: "Academia" }
	// ]
  interface Task {
  id: number;
  completed: boolean;
  text: string;
}

export default function RootLayout() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getValueAsyncStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('tasks');
        if (jsonValue !== null) {
          setTasks(JSON.parse(jsonValue));
        } 
      } catch (error) {
        console.error("Error retrieving tasks:", error);
      }
    }
    getValueAsyncStorage();
  }, [])

  useEffect(() => {
    const setValueAsyncStorage = async () => {
      try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem('tasks', jsonValue);
      } catch (error) {
        console.error("Error saving tasks:", error);
      }
    }
    setValueAsyncStorage();
  }, [tasks])

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
        <SafeAreaView style={style.mainContainer}>
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
      </SafeAreaView>
    </GestureHandlerRootView>
  </>
  )
}

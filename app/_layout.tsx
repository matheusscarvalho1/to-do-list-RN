import reactLogo from "@/assets/images/react-logo.png";
import { colors } from "@/constants/color";
import { style } from "@/styles/stylesheet";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function RootLayout() {

  const onPressButton = (message: string) => {
    Alert.alert(message);
  }

  return (
  <>
    <ScrollView style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Image source={reactLogo} style={style.image1}/>
        <Text style={style.title}>Minhas Tarefas</Text>
      </View>
      <View style={style.taskWrapper}>
        <TextInput placeholder="Digite sua tarefa" style={style.input} />
      
        <Pressable
        onPress={() => onPressButton("Botão Pressionado - Adicionando Tarefa")}
        style={({pressed}) => [
          style.button,
          {backgroundColor: pressed ? colors.secondary : colors.primary}
        ]}
        >
          <Text style={style.buttonText}>+</Text>
      </Pressable>
      </View>
    </ScrollView>
  </>
  )
}

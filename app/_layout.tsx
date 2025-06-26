import { Alert, Button, Image, ScrollView, Text, TextInput } from "react-native";
import reactLogo from "../assets/images/react-logo.png";


export default function RootLayout() {

  const log = (message: string) => {
    console.log(message);
  }

  const alert = (message: string) => {
    Alert.alert(message);
  }

  return (
  <>
    <ScrollView>
      <Image source={reactLogo}/>
      <Text>Minhas Tarefass</Text>
      <TextInput />
      <Button
        title="Console Log"
        onPress={() => log("Este é um Log de teste")}
      />
      <Button
        title="Alert"
        onPress={() => alert("Este é um Alert de teste")}
      />
    </ScrollView>
  </>
  )
}

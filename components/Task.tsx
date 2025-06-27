import { colors } from "@/constants/color";
import { style } from "@/styles/stylesheet";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface TaskProps {
  text: string;
  initialCompleted: boolean;
}

export default function Task ({ text, initialCompleted }: TaskProps) {

    const [completed, setCompleted] = useState(initialCompleted);
    return (
        <View style={style.taskWrapper}>
            <Pressable onPress={() => setCompleted(!completed)}>
                 <Ionicons
                    name="checkmark-circle"
                    size={32}
                    color={completed ? colors.primary : colors.secondary}
                 />
            </Pressable>
            <Text>{text}</Text>
        </View>
    )

}
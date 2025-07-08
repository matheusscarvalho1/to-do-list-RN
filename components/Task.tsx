import { colors } from "@/constants/color";
import { style } from "@/styles/stylesheet";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Animated, Pressable, Text } from "react-native";
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

interface TaskProps {
  text: string;
  initialCompleted: boolean;
  deleteTasks: () => void;
}

export default function Task({ text, initialCompleted, deleteTasks }: TaskProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  const swipe = new Animated.Value(0);

  const handleFling = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE){
        Animated.timing(swipe, {
            toValue: 500,
            duration: 300,
            useNativeDriver: true,
        }).start(() => deleteTasks());
        
    }
  } 

  return (
    <FlingGestureHandler direction={Directions.RIGHT} onHandlerStateChange={handleFling}>
      <Animated.View style={[style.taskWrapper, { transform: [{ translateX: swipe }] }]}>
        <Pressable onPress={() => setCompleted(!completed)}>
          <Ionicons
            name="checkmark-circle"
            size={32}
            color={completed ? colors.primary : colors.secondary}
          />
        </Pressable>
        <Text>{text}</Text>
      </Animated.View>
    </FlingGestureHandler>
  );
}

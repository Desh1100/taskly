import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CounterScreen() {
  const route = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => route.navigate("/idea")}>
        <Text>Go to idea</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
function useRoute() {
  throw new Error("Function not implemented.");
}

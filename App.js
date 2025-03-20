import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SigninScreen from "./src/screens/SigninScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SigninScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

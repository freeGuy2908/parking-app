import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/parking-sign-icon.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function SigninScreen() {
  const { height } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Cac ham xu ly su kien
  const onSigninPressed = () => {
    Alert.alert("Sign in");
  };

  const onForgotPasswordPressed = () => {
    Alert.alert("forgot password");
  };

  const onGoogleSigninPressed = () => {
    Alert.alert("Google sign in");
  };

  const onSignupPressed = () => {
    Alert.alert("Go to sign up screen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[StyleSheet.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Sign in" onPress={onSigninPressed} />
        <CustomButton
          text="Forgot password?"
          type="TETIARY"
          onPress={onForgotPasswordPressed}
        />

        <CustomButton
          text="Sign in with Google"
          onPress={onGoogleSigninPressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Don't have an account? Create one"
          type="TETIARY"
          onPress={onSignupPressed}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

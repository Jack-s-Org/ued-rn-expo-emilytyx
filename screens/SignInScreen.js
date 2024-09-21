import Onboarding from "@/components/Onboarding";
import { globalStyles } from "@/globalStyleSheet";
import { Text, Button, StyleSheet, View, Pressable } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#0b0b0b",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
        style={{
          backgroundColor: "#0b0b0b",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Onboarding source={require("@/assets/videos/onboardingvid.mp4")} />
        <View style={{ position: "absolute", top: 545 }}>
          <Text
            style={[
              globalStyles.clash32,
              {
                color: "white",
                fontSize: 36,
                textTransform: "uppercase",
              },
            ]}
          >
            Welcome to mubi
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 623,
            zIndex: 10,
          }}
        >
          <Text style={globalStyles.satobold14}>Tap to continue</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignInScreen;

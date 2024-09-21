// import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";
import RootNavigator from "./screens/RootNavigator";
import { VideoProvider } from "./components/CornerVideo";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    SatoshiRegular: require("@/assets/fonts/Satoshi-Regular.otf"),
    SatoshiMed: require("@/assets/fonts/Satoshi-Medium.otf"),
    SatoshiBold: require("@/assets/fonts/Satoshi-Bold.otf"),
    SatoshiItalics: require("@/assets/fonts/Satoshi-MediumItalic.otf"),
    ClashDisplay: require("@/assets/fonts/ClashDisplay-Semibold.otf"),
    Priscilla: require("@/assets/fonts/PalaceScript.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <VideoProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </VideoProvider>
  );
}

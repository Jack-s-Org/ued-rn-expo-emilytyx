import {
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

import { globalStyles } from "@/globalStyleSheet";
import VideoWrapper from "@/components/CornerVideo";
import Aftersun from "@/components/Aftersun";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const SunParty = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#0b0b0b", height: "100%" }}>
      <ScrollView
        scrollEnabled={false}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        style={{ height: 450 }}
      >
        <View style={{ position: "absolute" }}>
          <VideoWrapper
            // this is where you customize the corner video
            cornerProps={{
              width: 150,
              height: 100,
              top: 50,
              bottom: 50,
              left: 7,
              right: 7,
              // onPress: () => Alert.alert("Corner video is being pressed! "), // do something when corner video is pressed
            }}
            // this is where you customize the main video
            // props list: https://docs.expo.dev/versions/latest/sdk/video-av
            videoProps={{
              shouldPlay: true,
              isLooping: true,
              source: require("@/assets/videos/AFTERSUNclip.mp4"),
              useNativeControls: true,
              resizeMode: "cover",
            }}
            // onPress={() => Alert.alert("Main video is being pressed! ")} // do something when the main video is long pressed
            style={{ width: 390, height: 217 }}
          />
          {/* <Aftersun source={require("@/assets/videos/AFTERSUNclip.mp4")} /> */}

          <LinearGradient
            colors={["#0b0b0b", "rgba(0, 0, 0, 0.3)"]}
            useAngle={true}
            angle={360}
            style={{
              display: "flex",
              width: 390,
              height: 50,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 12,
              paddingLeft: 16,
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-end",
              flexWrap: "nowrap",
              position: "absolute",
              top: 220,
              left: 0,
            }}
          >
            <Text style={globalStyles.clashcap22}> Chatroom</Text>
          </LinearGradient>
        </View>
      </ScrollView>

      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#0b0b0b", top: 6 }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={require("@/assets/images/party/commentsFrame.png")}
            style={{
              width: 358,
              height: 702,
            }}
          />
        </View>
      </ScrollView>
      <ScrollView
        scrollEnabled={false}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        style={{ height: 100, bottom: 0 }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={require("@/assets/images/party/bottomPanel.png")}
            style={{
              width: 390,
              height: 32,
              position: "absolute",
              top: 10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cast: {
    display: "flex",
    gap: 8,
    width: 139,
    alignItems: "flex-start",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
  },
});
export default SunParty;

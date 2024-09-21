import { Image, Text, View } from "react-native";
import VideoPlayer from "./VideoPlayer";

const Onboarding = ({ source, imagesource }) => {
  return (
    <View
      style={{ position: "relative", height: 844, width: 390, opacity: 0.3 }}
    >
      <VideoPlayer source={source} />
      {/* <Text
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          color: "white",
          fontSize: 36,
        }}
      >
        Hello
      </Text> */}
    </View>
  );
};

export default Onboarding;

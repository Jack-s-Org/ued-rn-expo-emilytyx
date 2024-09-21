import { Image, Text, View } from "react-native";
import VideoPlayer from "./VideoPlayer";

const FriendParty = ({ source, imagesource }) => {
  return (
    <View style={{ position: "relative", height: 178, width: 316 }}>
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
      <Image
        source={imagesource}
        style={{ width: 316.4, height: 79.6, position: "absolute", bottom: 0 }}
      />
    </View>
  );
};

export default FriendParty;

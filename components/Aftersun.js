import { Image, Text, View } from "react-native";
import UnmutedVidPlayer from "./UnmutedVidPlayer";

const Aftersun = ({ source, imagesource }) => {
  return (
    <View style={{ width: 390, height: 217 }}>
      <UnmutedVidPlayer source={source} />
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

export default Aftersun;

import { Image, StyleSheet, Text, View } from "react-native";
import VideoPlayer from "./VideoPlayer";
import { globalStyles } from "@/globalStyleSheet";

const SearchPreview = ({ source, imagesource, textsource }) => {
  return (
    <View style={{ position: "relative", height: 193, width: 113 }}>
      <VideoPlayer
        source={source}
        resizeMode="contain"
        style={{ height: 193, width: 113 }}
      />

      {/* <Image
        source={imagesource}
        style={{ width: 316.4, height: 79.6, position: "absolute", bottom: 0 }}
      /> */}
    </View>
  );
};

export default SearchPreview;

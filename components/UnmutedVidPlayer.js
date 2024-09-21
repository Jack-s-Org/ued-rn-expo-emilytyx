import * as React from "react";
import { View, StyleSheet, Button, Pressable, Text, Image } from "react-native";
import { Audio, Video, ResizeMode } from "expo-av";
import { globalStyles } from "@/globalStyleSheet";

export default function UnmutedVidPlayer({ source }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  React.useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  return (
    <Video
      ref={video}
      style={[{ aspectRatio: 16 / 9 }, StyleSheet.absoluteFill]}
      source={source}
      useNativeControls={true}
      resizeMode={ResizeMode.COVER}
      isLooping
      shouldPlay
      isMuted={false}
      playsInSilentModeIOS={true}
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}

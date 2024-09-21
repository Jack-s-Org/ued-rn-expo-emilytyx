/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Video, ResizeMode } from "expo-av";

import { handler } from "./utils";
import { VideoProvider } from "./index";

const CornerVideo = ({ currentTime, props, positions }) => {
  const { cornerProps, videoProps } = props;

  const [loaded, setLoaded] = useState(false);
  const ref = useRef(Video.prototype);
  const width = useSharedValue(positions.w);
  const height = useSharedValue(positions.h);
  const top = useSharedValue(positions.y);
  const left = useSharedValue(positions.x);
  const dragX = useSharedValue(0);
  const dragY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    setLoaded(false);
    // @ts-ignore
  }, [props.videoProps.source.uri]);

  const animate = () => {
    width.value = withSpring(cornerProps.width, { damping: 15 });
    height.value = withSpring(cornerProps.height, { damping: 15 });
    top.value = withSpring(cornerProps.top, { damping: 15 });
    left.value = withSpring(cornerProps.left, { damping: 15 });
  };

  const onGesture = Gesture.Pan()
    .onUpdate((e) => {
      dragX.value = offsetX.value + e.translationX;
      dragY.value = offsetY.value + e.translationY;
    })
    .onEnd((e) => {
      const { x, y } = handler({
        e,
        props: {
          cornerProps,
          videoProps,
        },
      });
      offsetX.value = x;
      offsetY.value = y;
      dragX.value = withSpring(x, { damping: 15 });
      dragY.value = withSpring(y, { damping: 15 });
    });

  const dragStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dragX.value }, { translateY: dragY.value }],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      top: top.value,
      left: left.value,
    };
  });

  return (
    <GestureDetector gesture={onGesture}>
      <Animated.View
        style={[
          styles.cornerVideo,
          {
            width: positions.w,
            height: positions.h,
            top: positions.y,
            left: positions.x,
          },
          dragStyle,
          animatedStyle,
        ]}
      >
        <Pressable
          onPress={() =>
            props.cornerProps.onPress && props.cornerProps.onPress()
          }
          style={{ width: "100%", height: "100%" }}
        >
          <Video
            ref={ref}
            style={styles.videoPlayer}
            resizeMode={ResizeMode.COVER}
            onReadyForDisplay={() => {
              setLoaded(true);
              ref.current.playFromPositionAsync(currentTime);
            }}
            source={videoProps.source}
          />
        </Pressable>

        {!loaded && (
          <ActivityIndicator
            style={{ position: "absolute" }}
            color="#444"
            size="small"
          />
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => VideoProvider.hide()}
          style={styles.closeBtn}
        >
          <Image
            style={styles.closeImg}
            source={require("./close.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  cornerVideo: {
    width: 150,
    height: 100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    left: 7,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#EEE",
  },
  videoPlayer: {
    width: "100%",
    height: "100%",
  },
  closeBtn: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 5,
    left: 5,
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0, .4)",
  },
  closeImg: {
    tintColor: "#fff",
    width: 10,
    height: 10,
  },
});

export default CornerVideo;

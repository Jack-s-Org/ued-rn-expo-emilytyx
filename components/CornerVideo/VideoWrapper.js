import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Video } from "expo-av";

import { VideoProvider } from "./index";

var currentTime = 0;

const VideoWrapper = React.forwardRef((props, ref) => {
  const cornerRef = useRef(TouchableOpacity.prototype);
  const [pos, setPos] = useState({ w: 0, h: 0, x: 0, y: 0 });

  const onLayout = () => {
    cornerRef?.current?.measure((_x, _y, w, h, pageX, pageY) => {
      setPos({ w, h, x: pageX, y: pageY });
    });
  };

  const onProgress = (data) => {
    currentTime = data.positionMillis;
    props.videoProps.onProgress && props.videoProps.onProgress(data);
  };

  const onPress = () => {
    props.onPress && props.onPress();
    // @ts-ignore
    VideoProvider.show(pos, props, currentTime, props.videoProps.source);
  };

  return (
    <TouchableOpacity
      style={props.style}
      onLayout={onLayout}
      ref={cornerRef}
      activeOpacity={1}
      onLongPress={onPress}
    >
      <Video
        style={props.style}
        ref={ref}
        {...props.videoProps}
        onPlaybackStatusUpdate={onProgress}
      />
      {props.children}
    </TouchableOpacity>
  );
});

VideoWrapper.displayName = "VideoWrapper";

export default VideoWrapper;

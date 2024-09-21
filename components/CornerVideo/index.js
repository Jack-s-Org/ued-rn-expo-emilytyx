/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CornerVideo from "./CornerVideo";

var ref = null;

export const VideoProvider = (props) => {
  const viewRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState({
    w: 0,
    h: 0,
    x: 0,
    y: 0,
  });
  const [cornerProps, setCornerProps] = useState({
    cornerProps: {
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    videoProps: {
      source: { uri: "" },
    },
  });
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    ref = viewRef;
  }, []);

  const show = (_pos, _cornerProps, _currentTime, _videoSource) => {
    setPositions(_pos);
    setCornerProps({
      cornerProps: _cornerProps.cornerProps,
      videoProps: { source: _videoSource },
    });
    setCurrentTime(_currentTime);
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  React.useImperativeHandle(
    viewRef,
    // @ts-ignore
    React.useCallback(
      () => ({
        show,
        hide,
      }),
      [show, hide]
    )
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View ref={ref} style={styles.container}>
        {props.children}
        {isVisible && (
          <CornerVideo
            currentTime={currentTime}
            positions={positions}
            props={cornerProps}
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
};

VideoProvider.show = (pos, cornerProps, currentTime, videoSource) => {
  ref?.current?.show(pos, cornerProps, currentTime, videoSource);
};

VideoProvider.hide = () => {
  ref?.current?.hide();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { default } from "./VideoWrapper";

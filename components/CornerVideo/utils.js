import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const handler = ({ e, props }) => {
  "worklet";
  let x = 0;
  let y = 0;
  const bottomInset =
    props.cornerProps.height + props.cornerProps.top + props.cornerProps.bottom;
  const rightInset =
    props.cornerProps.width + props.cornerProps.left + props.cornerProps.right;

  if (e.absoluteX <= SCREEN_WIDTH / 2) {
    if (e.absoluteY <= SCREEN_HEIGHT / 2) {
      // Left Top
      if (e.velocityY > 2000) {
        y = SCREEN_HEIGHT - bottomInset;
      }

      if (e.velocityX > 1000) {
        x = SCREEN_WIDTH - rightInset;
      }
    } else {
      // Left Bottom
      y = SCREEN_HEIGHT - bottomInset;

      if (e.velocityY < -2000) {
        y = 0;
      }

      if (e.velocityX > 1000) {
        x = SCREEN_WIDTH - rightInset;
      }
    }
  } else {
    if (e.absoluteY <= SCREEN_HEIGHT / 2) {
      // Right Top
      x = SCREEN_WIDTH - rightInset;

      if (e.velocityY > 2000) {
        y = SCREEN_HEIGHT - bottomInset;
      }

      if (e.velocityX < -1000) {
        x = 0;
      }
    } else {
      // Right Bottom
      x = SCREEN_WIDTH - rightInset;
      y = SCREEN_HEIGHT - bottomInset;

      if (e.velocityY < -2000) {
        y = 0;
      }

      if (e.velocityX < -1000) {
        x = 0;
      }
    }
  }

  return { x, y };
};

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  fullscreen: {
    height: "100%",
    backgroundColor: "#0b0b0b",
    display: "flex",
    flex: 1,
    paddingBottom: 30,
  },

  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  trailer: {
    paddingBottom: 20,
    alignItems: "left",
    display: "flex",
    flexDirection: "row",
  },

  sypnosis: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  previewFrame: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 10,
    gap: 12,
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
    overflow: "hidden",
  },

  thumbnailFrame: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    left: 16,
    paddingRight: 16,
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
  },

  smallThumbnail: {
    width: 194,
    height: 110,
    flexShrink: 0,
    fontSize: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    position: "relative",
    overflow: "hidden",
    zIndex: 32,
  },

  trailerButton: {
    // display: "flex",
    width: 106,
    height: 37,
    // flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    // borderRadius: 100,
    // borderWidth: 1,
    // borderColor: "white",
  },

  buttontext: {
    fontFamily: "SatoshiBold",
    fontSize: 16,
    lineHeight: 24,
    color: "white",
    position: "relative",
    textAlign: "center",
  },

  satobold14: {
    color: "white",
    fontFamily: "SatoshiBold",
    fontSize: "14",
    lineHeight: 16.8,
    letterSpacing: 0.28,
    textTransform: "uppercase",
  },

  sato20: {
    color: "white",
    fontFamily: "SatoshiMed",
    fontSize: "20",
    lineHeight: "20",
  },

  sato14: {
    color: "white",
    fontFamily: "SatoshiMed",
    fontSize: "14",
    lineHeight: "20",
  },

  sato12: {
    color: "white",
    fontFamily: "SatoshiRegular",
    fontWeight: "light",
    fontSize: "12",
    lineHeight: "20",
  },

  clash32: {
    color: "white",
    fontFamily: "ClashDisplay",
    fontSize: "32",
    letterSpacing: "0.28",
  },
  clashcap22: {
    color: "white",
    fontFamily: "ClashDisplay",
    fontSize: "22",
    letterSpacing: "0.28",
    textTransform: "uppercase",
  },
  clash22: {
    color: "white",
    fontFamily: "ClashDisplay",
    fontSize: "22",
    letterSpacing: "0.28",
    textTransform: "capitalize",
  },

  clash16: {
    color: "white",
    fontFamily: "ClashDisplay",
    fontSize: "16",
    letterSpacing: "0.28",
    lineHeight: 16.8,
    textTransform: "uppercase",
  },
  clash14: {
    color: "white",
    fontFamily: "ClashDisplay",
    fontSize: "14",
    letterSpacing: "0.28",
    lineHeight: 16.8,
    textTransform: "uppercase",
  },

  satoita: {
    color: "white",
    fontFamily: "SatoshiItalics",
    fontSize: "14",
    lineHeight: "14",
    letterSpacing: "0.28",
    textTransform: "uppercase",
    left: 16,
  },

  thumbnailTitle: {
    color: "white",
    fontFamily: "SatoshiBold",
    fontSize: "14",
    lineHeight: 16.8,
    letterSpacing: 0.28,
    textTransform: "uppercase",
    position: "absolute",
    top: 86,
    left: 10,
    zIndex: 50,
  },
});

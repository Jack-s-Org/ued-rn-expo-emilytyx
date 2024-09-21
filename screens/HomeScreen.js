import {
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "@/globalStyleSheet";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <View style={globalStyles.fullscreen}>
        <Image
          source={require("@/assets/images/homescreen/titane.png")}
          style={{ height: 339, width: 390 }}
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "#0b0b0b"]}
          useAngle={true}
          angle={360}
          style={{
            display: "flex",
            width: 390,
            height: 67,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 12,
            paddingLeft: 16,
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-end",
            flexWrap: "nowrap",
            position: "absolute",
            top: 273,
            left: 0,
          }}
        >
          <Text style={globalStyles.clash32}> Welcome Back</Text>
        </LinearGradient>

        <View
          style={{
            display: "flex",
            // paddingLeft: 16,
            gap: 12,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
            overflow: "hidden",
            zIndex: 21,
          }}
        >
          <Text style={globalStyles.satoita}>Continue Watching</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={globalStyles.thumbnailFrame}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MoviePreview");
                }}
              >
                <View
                  style={{
                    width: 230,
                    height: 130,
                    flexShrink: 0,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    borderBottomLeftRadius: 8,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      height: 15,
                      fontFamily: "SatoshiMed",
                      fontSize: 10,
                      letterSpacing: 0.2,
                      lineHeight: 15,
                      color: "rgba(255, 255, 255, 0.8)",
                      position: "relative",
                      textAlign: "left",
                      textTransform: "uppercase",
                      zIndex: 2,
                      marginTop: 103,
                      marginLeft: 13,
                    }}
                    numberOfLines={1}
                  >
                    46 min LEFT
                  </Text>
                  <ImageBackground
                    style={{
                      width: 230,
                      height: 149,
                      position: "absolute",
                      top: -12.577,
                      left: 0,
                      zIndex: 1,
                    }}
                    source={require("@/assets/images/homescreen/conwatch1.png")}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 230,
                  height: 130,
                  flexShrink: 0,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 3,
                }}
              >
                <Text
                  style={{
                    height: 15,
                    fontFamily: "SatoshiMed",
                    fontSize: 10,
                    letterSpacing: 0.2,
                    lineHeight: 15,
                    color: "rgba(255, 255, 255, 0.8)",
                    position: "relative",
                    textAlign: "left",
                    textTransform: "uppercase",
                    zIndex: 6,
                    marginTop: 103,
                    marginLeft: 12.689,
                  }}
                  numberOfLines={1}
                >
                  1h 34 min LEFT
                </Text>

                <ImageBackground
                  style={{
                    width: 250,
                    height: 131,
                    position: "absolute",
                    top: 0,
                    left: -9.679,
                    zIndex: 4,
                  }}
                  source={require("@/assets/images/homescreen/conwatch2.png")}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  width: 230,
                  height: 130,
                  flexShrink: 0,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 7,
                }}
              >
                <Text
                  style={{
                    display: "flex",
                    height: 15,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    fontFamily: "SatoshiMed",
                    fontSize: 10,
                    letterSpacing: 0.2,
                    lineHeight: 15,
                    color: "rgba(255, 255, 255, 0.8)",
                    position: "absolute",
                    top: 103,
                    left: 13.378,
                    textAlign: "left",
                    textTransform: "uppercase",
                    zIndex: 11,
                  }}
                  numberOfLines={1}
                >
                  1h 22 min LEFT
                </Text>
                <ImageBackground
                  style={{
                    width: 250,
                    height: 130,
                    position: "absolute",
                    top: 0,
                    left: -9.679,
                    zIndex: 4,
                  }}
                  source={require("@/assets/images/homescreen/conwatch3.png")}
                  resizeMode="cover"
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              display: "flex",
              paddingTop: 30,
              gap: 12,
              alignItems: "flex-start",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
            }}
          >
            <Text style={globalStyles.satoita} numberOfLines={1}>
              New Released
            </Text>
            <View
              style={{
                display: "flex",
                height: 146,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  width: 169,
                  alignItems: "flex-start",
                  flexShrink: 0,
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: 21,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 22,
                    left: 16,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 33,
                      height: 33,
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 23,
                    }}
                    source={require("@/assets/images/homescreen/newreleasedicon.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.clash14} numberOfLines={1}>
                    Sofia Coppola
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 43,
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    flexWrap: "nowrap",
                    position: "relative",
                    zIndex: 25,
                  }}
                >
                  <Text
                    style={{
                      height: 48,
                      flexShrink: 0,
                      flexBasis: "auto",
                      fontFamily: "Priscilla",
                      fontSize: 56,
                      lineHeight: 48,
                      color: "#ffffff",
                      position: "relative",
                      textAlign: "left",
                      textTransform: "capitalize",
                      zIndex: 26,
                    }}
                    numberOfLines={1}
                  >
                    Priscilla
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 195,
                  height: 146,
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 27,
                }}
              >
                <ImageBackground
                  style={{
                    width: 260,
                    height: 146,
                    position: "absolute",
                    top: 0,
                    left: -34,
                    zIndex: 28,
                  }}
                  source={require("@/assets/images/homescreen/priscilla.png")}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
          <View style={globalStyles.previewFrame}>
            <Text style={globalStyles.satoita}>Recommendations</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={globalStyles.thumbnailFrame}>
                <View style={globalStyles.smallThumbnail}>
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Past Lives
                  </Text>
                  <ImageBackground
                    style={{
                      width: 196,
                      height: 110,
                      position: "absolute",
                      top: -0.07,
                      left: -0.32,
                      zIndex: 33,
                    }}
                    source={require("@/assets/images/homescreen/rec01.png")}
                    resizeMode="cover"
                  />
                </View>
                <View style={globalStyles.smallThumbnail}>
                  <ImageBackground
                    style={{
                      width: 196,
                      height: 110,
                      position: "absolute",
                      top: 0.39,
                      left: 0.44,
                      zIndex: 36,
                    }}
                    source={require("@/assets/images/homescreen/rec02.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    The dreamers
                  </Text>
                </View>
                <View style={globalStyles.smallThumbnail}>
                  <ImageBackground
                    style={{
                      width: 194,
                      height: 110,
                      position: "absolute",
                    }}
                    source={require("@/assets/images/homescreen/rec03.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Monster
                  </Text>
                </View>
                <View style={globalStyles.smallThumbnail}>
                  <ImageBackground
                    style={{
                      width: 194,
                      height: 110,
                      position: "absolute",
                      top: 0,
                      left: -0.02,
                      zIndex: 42,
                    }}
                    source={require("@/assets/images/homescreen/rec04.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Parasite
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={globalStyles.previewFrame}>
            <Text style={globalStyles.satoita}>Top</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={[globalStyles.thumbnailFrame]}>
                <View
                  style={{
                    width: 314,
                    height: 176,
                    flexShrink: 0,
                    backgroundColor: "#494949",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 49,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 314.667,
                      height: 177,
                      position: "relative",
                      zIndex: 50,
                      marginTop: -0.61,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.22,
                    }}
                    source={require("@/assets/images/homescreen/top01.png")}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    width: 314,
                    height: 176,
                    flexShrink: 0,
                    backgroundColor: "#494949",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 49,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 314.667,
                      height: 177,
                      position: "relative",
                      zIndex: 52,
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.11,
                    }}
                    source={require("@/assets/images/homescreen/top02.png")}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    width: 314,
                    height: 176,
                    flexShrink: 0,
                    backgroundColor: "#494949",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 49,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 314,
                      height: 176,
                      flexShrink: 0,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 53,
                    }}
                    source={require("@/assets/images/homescreen/top03.png")}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    width: 314,
                    height: 176,
                    flexShrink: 0,
                    backgroundColor: "#494949",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 49,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 314,
                      height: 176,
                      flexShrink: 0,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 54,
                    }}
                    source={require("@/assets/images/homescreen/top04.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={[globalStyles.previewFrame, { paddingBottom: 100 }]}>
            <Text style={globalStyles.satoita}>Leaving Soon</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={globalStyles.thumbnailFrame}>
                <View style={globalStyles.smallThumbnail}>
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Blank Narcissus
                  </Text>
                  <ImageBackground
                    style={{
                      width: 196,
                      height: 110,
                      position: "absolute",
                      top: -0.07,
                      left: -0.32,
                      zIndex: 33,
                    }}
                    source={require("@/assets/images/homescreen/LS01.png")}
                    resizeMode="cover"
                  />
                </View>
                <View style={globalStyles.smallThumbnail}>
                  <ImageBackground
                    style={{
                      width: 196,
                      height: 110,
                      position: "absolute",
                      top: 0.39,
                      left: 0.44,
                      zIndex: 36,
                    }}
                    source={require("@/assets/images/homescreen/LS02.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Colossal
                  </Text>
                </View>
                <View style={globalStyles.smallThumbnail}>
                  <ImageBackground
                    style={{
                      width: 194,
                      height: 110,
                      position: "absolute",
                    }}
                    source={require("@/assets/images/homescreen/LS03.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Jess + Moss
                  </Text>
                </View>
                <View style={globalStyles.smallThumbnail}>
                  <ImageBackground
                    style={{
                      width: 194,
                      height: 110,
                      position: "absolute",
                      top: 0,
                      left: -0.02,
                      zIndex: 42,
                    }}
                    source={require("@/assets/images/homescreen/LS04.png")}
                    resizeMode="cover"
                  />
                  <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                    Sicario
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

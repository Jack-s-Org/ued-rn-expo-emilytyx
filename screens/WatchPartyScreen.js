import FriendParty from "@/components/FriendParty";
import { globalStyles } from "@/globalStyleSheet";
import { Image, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const WatchPartyScreen = ({ navigation }) => {
  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <View style={[globalStyles.previewFrame, { paddingTop: 8 }]}>
        <Text style={globalStyles.satoita}> Your Friends</Text>
        <View style={globalStyles.thumbnailFrame}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("JoinSunParty");
                }}
              >
                <FriendParty
                  source={require("@/assets/videos/AFTERSUNclip.mp4")}
                  imagesource={require("@/assets/images/watchParty/sunParty.png")}
                />
              </Pressable>
              <FriendParty
                source={require("@/assets/videos/watchPartyScreen/sitad.mp4")}
                imagesource={require("@/assets/images/watchParty/timeParty.png")}
              />
              <FriendParty
                source={require("@/assets/videos/watchPartyScreen/gifted1.mp4")}
                imagesource={require("@/assets/images/watchParty/chillz.png")}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={globalStyles.previewFrame}>
        <Text style={globalStyles.satoita}> You may be interested</Text>
        <View style={[globalStyles.thumbnailFrame, { left: 8 }]}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              paddingBottom: 100,
            }}
          >
            <Image
              source={require("@/assets/images/watchParty/partiesSmallFrame.png")}
              style={{ width: 358, height: 208 }}
            />
            <Image
              source={require("@/assets/images/watchParty/parties.png")}
              style={{ width: 358, height: 208 }}
            />
            <Image
              source={require("@/assets/images/watchParty/partiesSmallFrame2.png")}
              style={{ width: 358, height: 208 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WatchPartyScreen;

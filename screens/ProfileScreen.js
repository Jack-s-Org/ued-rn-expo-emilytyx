import {
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/globalStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import SearchPreview from "@/components/SearchPreview";
import FriendParty from "@/components/FriendParty";
import VideoWrapper from "react-native-corner-video";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <LinearGradient
        colors={["#5d726b", "#0b0b0b"]}
        useAngle={true}
        angle={180}
        style={{
          display: "flex",
          width: 390,
          height: 268,
          paddingTop: 110,
          paddingRight: 30,
          paddingBottom: 0,
          paddingLeft: 30,
          gap: 14,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          top: 0,
          left: "50%",
          zIndex: 1,
          transform: [{ translateY: 0 }, { translateX: -195 }],
        }}
      >
        <Pressable
          style={{ zIndex: 100, position: "absolute", top: 50 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("@/assets/icons/backIcon.png")}
            style={{ width: 36, height: 42 }}
          />
        </Pressable>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            gap: 30,
          }}
        >
          <Image
            source={require("@/assets/images/ProfileIcon.png")}
            style={{ width: 104.77, height: 104.77 }}
          />
          <View>
            <Text style={globalStyles.clash32}>emeelee</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.clash16}>102</Text>
                <Text style={globalStyles.sato12}>followers</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.clash16}>122</Text>
                <Text style={globalStyles.sato12}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("@/assets/icons/editButton.png")}
              style={{ width: 61, height: 30 }}
            />
          </TouchableOpacity>

          <Image
            source={require("@/assets/icons/shareIcon.png")}
            style={{ width: 35, height: 42 }}
          />
        </View>
      </LinearGradient>
      <View style={globalStyles.previewFrame}>
        <Text style={globalStyles.satoita}> Your watch lists</Text>
        <View style={globalStyles.thumbnailFrame}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
            
              }}
            >
              <Image
                source={require("@/assets/images/library/watchList01.png")}
                style={{ width: 356, height: 114 }}
              />
              <Image
                source={require("@/assets/images/library/watchList02.png")}
                style={{ width: 356, height: 114 }}
              />
              <Image
                source={require("@/assets/images/library/watchList03.png")}
                style={{ width: 356, height: 114 }}
              />
              <Image
                source={require("@/assets/images/library/addWatchList.png")}
                style={{ width: 356, height: 114 }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

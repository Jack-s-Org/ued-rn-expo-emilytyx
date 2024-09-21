import {
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/globalStyleSheet";
import VideoPlayer from "@/components/VideoPlayer";
import SearchPreview from "@/components/SearchPreview";
import FriendParty from "@/components/FriendParty";
import VideoWrapper from "react-native-corner-video";

const DiscoverScreen = () => {
  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={true}
      style={{ backgroundColor: "#0b0b0b", paddingVertical: 20 }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 100,
          padding: 12,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={require("@/assets/icons/searchIconBlack.png")}
          style={{ height: 20, width: 20 }}
        />
        <Text style={[globalStyles.sato14, { color: "#0b0b0b" }]}>
          {" "}
          What do you want to watch?
        </Text>
      </View>
      <View style={globalStyles.previewFrame}>
        <Text style={[globalStyles.satobold14, { left: 16 }]}>Recommended</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <View>
          <SearchPreview source={require("@/assets/videos/AFTERSUNclip.mp4")} />
          <Text
            style={[
              globalStyles.clash14,
              {
                bottom: 40,
                padding: 16,
              },
            ]}
          >
            {" "}
            drama
          </Text>
        </View>
        <View>
          <SearchPreview
            source={require("@/assets/videos/SearchPage/TheSubstance.mp4")}
          />
          <Text
            style={[
              globalStyles.clash14,
              {
                bottom: 40,
                padding: 16,
              },
            ]}
          >
            {" "}
            sci-fi
          </Text>
        </View>
        <View>
          <SearchPreview
            source={require("@/assets/videos/SearchPage/NIMIC.mp4")}
          />
          <Text
            style={[
              globalStyles.clash14,
              {
                position: "absolute",
                bottom: 40,
                padding: 16,
              },
            ]}
          >
            {" "}
            thriller
          </Text>
        </View>
      </View>
      <View
        style={[
          globalStyles.previewFrame,
          { paddingTop: 10, marginBottom: 30, paddingBottom: 100 },
        ]}
      >
        <Text style={globalStyles.satoita}>Explore your genres</Text>

        <View style={styles.container}>
          <Image
            source={require("@/assets/images/searchscreen/genre01.png")}
            style={{ width: 174, height: 99 }}
          />
          <Image
            source={require("@/assets/images/searchscreen/genre02.png")}
            style={{ width: 174, height: 99 }}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/searchscreen/genre03.png")}
            style={{ width: 174, height: 99 }}
          />
          <Image
            source={require("@/assets/images/searchscreen/genre04.png")}
            style={{ width: 174, height: 99 }}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/searchscreen/genre05.png")}
            style={{ width: 174, height: 99 }}
          />
          <Image
            source={require("@/assets/images/searchscreen/genre06.png")}
            style={{ width: 174, height: 99 }}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/searchscreen/genre07.png")}
            style={{ width: 174, height: 99 }}
          />
          <Image
            source={require("@/assets/images/searchscreen/genre08.png")}
            style={{ width: 174, height: 99 }}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/searchscreen/genre09.png")}
            style={{ width: 174, height: 99 }}
          />
          <Image
            source={require("@/assets/images/searchscreen/genre10.png")}
            style={{ width: 174, height: 99 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
  },
});
export default DiscoverScreen;

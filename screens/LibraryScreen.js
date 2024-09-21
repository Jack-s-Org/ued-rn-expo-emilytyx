import FriendParty from "@/components/FriendParty";
import { globalStyles } from "@/globalStyleSheet";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const LibraryScreen = () => {
  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <View style={[globalStyles.previewFrame, { paddingTop: 8 }]}>
        <Text style={globalStyles.satoita}> History</Text>
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
                gap: 6,
              }}
            >
              <Image
                source={require("@/assets/images/homescreen/conwatch1.png")}
                style={{ width: 146.58, height: 82.45 }}
              />
              <Image
                source={require("@/assets/images/homescreen/conwatch2.png")}
                style={{ width: 146.58, height: 82.45 }}
              />
              <Image
                source={require("@/assets/images/homescreen/conwatch3.png")}
                style={{ width: 146.58, height: 82.45 }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={globalStyles.previewFrame}>
        <Text style={globalStyles.satoita}> Your watch lists</Text>
        <View style={globalStyles.thumbnailFrame}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              paddingBottom: 100,
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
        </View>
      </View>
    </ScrollView>
  );
};

export default LibraryScreen;

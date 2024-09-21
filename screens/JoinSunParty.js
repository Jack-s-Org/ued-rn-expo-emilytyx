import {
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "@/globalStyleSheet";
import { LinearGradient } from "expo-linear-gradient";

const JoinSunParty = ({ navigation }) => {
  return (
    <View
      style={[
        globalStyles.fullscreen,
        { alignItems: "center", justifyContent: "center", gap: 40 },
      ]}
    >
      <Pressable
        style={{ zIndex: 100, position: "absolute", top: 50, left: 16 }}
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
          paddingVertical: 0,
          paddingHorizontal: 16,
          gap: 4,
          alignItems: "center",
          alignSelf: "stretch",
          position: "relative",
        }}
      >
        <Text style={globalStyles.sato20} numberOfLines={1}>
          You are about to join
        </Text>
        <Text style={globalStyles.clash32} numberOfLines={1}>
          Sun Party
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("SunParty");
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: "#5292b8",
            borderRadius: 100,
          }}
        >
          <Text style={globalStyles.buttontext}>Join</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={globalStyles.sato14} numberOfLines={1}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default JoinSunParty;

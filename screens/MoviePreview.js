import {
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

import { globalStyles } from "@/globalStyleSheet";

const MoviePreview = ({ navigation }) => {
  return (
    <ScrollView
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#0b0b0b" }}
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

      <View>
        <Image
          source={require("@/assets/images/moviePreview/aftersunPreview.png")}
          style={{ height: 522, width: 390 }}
        />
      </View>
      <View>
        <Pressable style={{ padding: 16 }}>
          <Image
            source={require("@/assets/icons/Trailer.png")}
            style={globalStyles.trailerButton}
          />
        </Pressable>
      </View>

      <View style={globalStyles.sypnosis}>
        <Text style={[globalStyles.satobold14]}>OUR TAKE</Text>
        <Text style={[globalStyles.sato14]}>
          Oscar®-nominated Paul Mescal and newcomer Frankie Corio are
          unforgettable as a dad and daughter abroad in Charlotte Wells's moving
          debut. Revealing the laughs, heartache and tenderness of a trip that
          means more with each passing moment, Aftersun captures a family
          snapshot of astonishing poignancy.
        </Text>
      </View>

      <View style={globalStyles.sypnosis}>
        <Text style={[globalStyles.satobold14]}>SYPNOSIS</Text>
        <Text style={[globalStyles.sato14]}>
          At a fading vacation resort, 11-year-old Sophie treasures rare time
          together with her loving and idealistic father, Calum. Twenty years
          later, Sophie's tender recollections of their last holiday become a
          powerful and heartrending portrait of their relationship.
        </Text>
      </View>
      <View style={globalStyles.previewFrame}>
        <Text style={[globalStyles.satobold14, { left: 16 }]}>
          Cast and Crew
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[globalStyles.thumbnailFrame]}>
            <View style={styles.cast}>
              <Image
                source={require("@/assets/images/moviePreview/01.png")}
                style={{ height: 161, width: 139 }}
              />
              <View style={{ display: "flex" }}>
                <Text style={[globalStyles.satobold14]}>Charlotte Wells</Text>
                <Text style={[globalStyles.sato14]}>Director, Screenplay </Text>
              </View>
            </View>

            <View style={styles.cast}>
              <Image
                source={require("@/assets/images/moviePreview/02.png")}
                style={{ height: 161, width: 139 }}
              />
              <View style={{ display: "flex" }}>
                <Text style={[globalStyles.satobold14]}>Paul Mescal</Text>
                <Text style={[globalStyles.sato14]}>Cast</Text>
              </View>
            </View>

            <View style={styles.cast}>
              <Image
                source={require("@/assets/images/moviePreview/03.png")}
                style={{ height: 161, width: 139 }}
              />
              <View style={{ display: "flex" }}>
                <Text style={[globalStyles.satobold14]}>Frankie Corio</Text>
                <Text style={[globalStyles.sato14]}>Cast </Text>
              </View>
            </View>

            <View style={styles.cast}>
              <Image
                source={require("@/assets/images/moviePreview/04.png")}
                style={{ height: 161, width: 139 }}
              />
              <View style={{ display: "flex" }}>
                <Text style={[globalStyles.satobold14]}>
                  Celia Rowlson-hall
                </Text>
                <Text style={[globalStyles.sato14]}>Cast </Text>
              </View>
            </View>

            <View style={styles.cast}>
              <Image
                source={require("@/assets/images/moviePreview/05.png")}
                style={{ height: 161, width: 139 }}
              />
              <View style={{ display: "flex" }}>
                <Text style={[globalStyles.satobold14]}>Sally Messham</Text>
                <Text style={[globalStyles.sato14]}>Cast </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1F1F1F",
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}
      >
        <Text style={globalStyles.clashcap22}>Ongoing Parties</Text>
        <Image
          source={require("@/assets/icons/rightArrow.png")}
          style={{ height: 42, width: 36 }}
        />
      </View>
      <View style={[globalStyles.previewFrame, { left: 16 }]}>
        <Text style={globalStyles.satobold14}>Rate this film</Text>
        <Image
          source={require("@/assets/images/moviePreview/starFrame.png")}
          style={{ width: 160, height: 24 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexShrink: 0,
          flexWrap: "nowrap",
          position: "relative",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}
        >
          <Text style={globalStyles.satobold14}>Reviews</Text>
          <Image
            source={require("@/assets/icons/rightArrow.png")}
            style={{ height: 30, width: 24 }}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[globalStyles.thumbnailFrame, { gap: 32 }]}>
            <Image
              source={require("@/assets/images/moviePreview/Review01.png")}
              style={{ width: 358, height: 213 }}
            />
            <Image
              source={require("@/assets/images/moviePreview/Review02.png")}
              style={{ width: 358, height: 213 }}
            />
            <Image
              source={require("@/assets/images/moviePreview/Review03.png")}
              style={{ width: 358, height: 213 }}
            />
          </View>
        </ScrollView>
        <View style={globalStyles.previewFrame}>
          <Text style={globalStyles.satoita}>Related</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={globalStyles.thumbnailFrame}>
              <View style={globalStyles.smallThumbnail}>
                <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                  Close
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
                  source={require("@/assets/images/moviePreview/thumbnail01.png")}
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
                  source={require("@/assets/images/moviePreview/thumbnail02.png")}
                  resizeMode="cover"
                />
                <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                  Petite maman
                </Text>
              </View>
              <View style={globalStyles.smallThumbnail}>
                <ImageBackground
                  style={{
                    width: 194,
                    height: 110,
                    position: "absolute",
                  }}
                  source={require("@/assets/images/moviePreview/thumbnail03.png")}
                  resizeMode="cover"
                />
                <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                  mustang
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
                  source={require("@/assets/images/moviePreview/thumbnail04.png")}
                  resizeMode="cover"
                />
                <Text style={globalStyles.thumbnailTitle} numberOfLines={1}>
                  past lives
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cast: {
    display: "flex",
    gap: 8,
    width: 139,
    alignItems: "flex-start",
    flexShrink: 0,
    flexWrap: "nowrap",
    position: "relative",
  },
});
export default MoviePreview;

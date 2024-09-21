import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import AddScreen from "./AddScreen";
import MoviePreview from "./MoviePreview";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Pressable, View } from "react-native";
import ProfileScreen from "./ProfileScreen";
import { globalStyles } from "@/globalStyleSheet";
import WatchPartyScreen from "./WatchPartyScreen";
import LibraryScreen from "./LibraryScreen";
import JoinSunParty from "./JoinSunParty";
import SunParty from "./SunParty";

const MainStacks = createNativeStackNavigator();
const HomeStacks = createNativeStackNavigator();
const PartyStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = () => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    // <AppDrawer navigation={navigation}>
    <View
      style={{
        height: "100%",
        backgroundColor: "#0b0b0b",
      }}
    >
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            height: 109,
            borderTopWidth: 0,
            width: 308,
            left: 41,
          },
          tabBarShowLabel: false,

          tabBarBackground: () => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <Image
                source={require("@/assets/images/tabBar/tabBarShape.png")}
                style={{
                  width: 308,
                  height: 79,

                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                resizeMode="cover"
              />
            </View>
          ),

          headerShown: true,

          headerStyle: {
            backgroundColor: "#0b0b0b",
            shadowColor: "#0b0b0b",
            height: 122,
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "ClashDisplay",
            fontSize: "22",
            letterSpacing: "0.28",
            textTransform: "capitalize",
          },
          headerTitleAlign: "left",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("ProfileScreen")}
              title="Info"
              style={{ padding: 16 }}
            >
              <Image
                source={require("@/assets/images/ProfileIcon.png")}
                style={{ height: 35, width: 35 }}
              />
            </Pressable>
          ),
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/tabBar/homeActive.png") // Image when active
                    : require("@/assets/images/tabBar/home.png") // Image when inactive
                }
                style={{ width: 69, height: 69 }}
                resizeMode="contain"
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/tabBar/searchActive.png") // Image when active
                    : require("@/assets/images/tabBar/search.png") // Image when inactive
                }
                style={{ width: 69, height: 69 }}
                resizeMode="contain"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Watch Party"
          component={PartyNavigator}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/tabBar/partyActive.png") // Image when active
                    : require("@/assets/images/tabBar/party.png") // Image when inactive
                }
                style={{ width: 69, height: 69 }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: "Watch Party",
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable
                // onPress={() => navigation.navigate("CreateParty1")}
                >
                  <Image
                    source={require("@/assets/icons/createIcon.png")}
                    style={{ height: 35, width: 35 }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("ProfileScreen")}
                  title="Info"
                  style={{ padding: 16 }}
                >
                  <Image
                    source={require("@/assets/images/ProfileIcon.png")}
                    style={{ height: 35, width: 35 }}
                  />
                </Pressable>
              </View>
            ),
          })}
        />

        <Tab.Screen
          name="Your Library"
          component={LibraryScreen}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/tabBar/libraryActive.png") // Image when active
                    : require("@/assets/images/tabBar/library.png") // Image when inactive
                }
                style={{ width: 69, height: 69 }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: "Library",
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable
                // onPress={() => navigation.navigate("CreateWatchList1")}
                >
                  <Image
                    source={require("@/assets/icons/createIcon.png")}
                    style={{ height: 35, width: 35 }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("ProfileScreen")}
                  title="Info"
                  style={{ padding: 16 }}
                >
                  <Image
                    source={require("@/assets/images/ProfileIcon.png")}
                    style={{ height: 35, width: 35 }}
                  />
                </Pressable>
              </View>
            ),
          })}
        />
      </Tab.Navigator>
    </View>
    // </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="JoinSunParty"
        component={JoinSunParty}
        options={{ animation: "slide_from_right", headerShown: false }}
      />
      <MainStacks.Screen
        name="SunParty"
        component={SunParty}
        options={{ animation: "slide_from_right", headerShown: false }}
      />
      <MainStacks.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ animation: "slide_from_right", headerShown: false }}
      />
    </MainStacks.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStacks.Navigator>
      <HomeStacks.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStacks.Screen
        name="MoviePreview"
        component={MoviePreview}
        options={{ animation: "slide_from_right", headerShown: false }}
      />
    </HomeStacks.Navigator>
  );
};
const PartyNavigator = () => {
  return (
    <PartyStacks.Navigator>
      <PartyStacks.Screen
        name="WatchPartyScreen"
        component={WatchPartyScreen}
        options={{ headerShown: false }}
      />
      <PartyStacks.Screen
        name="SunParty"
        component={MoviePreview}
        options={{ animation: "slide_from_right", headerShown: false }}
      />
    </PartyStacks.Navigator>
  );
};

export default MainScreens;

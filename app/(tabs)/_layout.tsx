import { Tabs } from "expo-router";
import { HomeIcon, StarIcon } from "react-native-heroicons/outline";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#E7BFAC",
        tabBarStyle: {
          backgroundColor: "#201917",
          borderTopColor: "#201917",
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => <StarIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

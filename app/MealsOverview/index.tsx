import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text } from "react-native";

const MealsOverview = () => {
  const { categoryId } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>Category ID: {categoryId}</Text>
    </SafeAreaView>
  );
};

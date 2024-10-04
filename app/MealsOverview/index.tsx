import React from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MEALS } from "@/constants/meals";

const defaultImage = require("@/assets/images/meal.jpg");

interface MealItemProps {
  title: string;
  imageUrl?: string;
  duration: number;
  complexity: string;
  affordability: string;
  onSelectMeal: () => void;
}

const MealItem: React.FC<MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onSelectMeal,
}) => {
  return (
    <TouchableOpacity onPress={onSelectMeal} style={styles.mealItem}>
      <View>
        <Image
          source={imageUrl ? { uri: imageUrl } : defaultImage}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsItem}>🕐{duration} mins</Text>
          <Text style={styles.detailsItem}>👨‍🍳{complexity}</Text>
          <Text style={styles.detailsItem}>
            💰
            {affordability}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MealsOverview: React.FC = () => {
  const { categoryId } = useLocalSearchParams();

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId as string),
  );

  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          console.log("Meal selected");
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
    backgroundColor: "#201917",
  },
  mealItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "100%",
  },
  detailsItem: {
    marginHorizontal: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#3A3B3C",
    textTransform: "capitalize",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default MealsOverview;

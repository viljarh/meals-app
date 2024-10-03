import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { useRouter } from "expo-router";
import CategoryGrid from "@/components/CategoryGrid";
import { CATEGORIES } from "@/constants/categories";

interface Category {
  id: string;
  title: string;
  color: string;
}

const CategoriesScreen: React.FC = () => {
  const router = useRouter();

  const renderGridItem: ListRenderItem<Category> = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          router.push({
            pathname: "/Meals",
            params: { categoryId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: "#201917" }}
      contentContainerStyle={{
        flex: 1,
        paddingBottom: 20,
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default CategoriesScreen;

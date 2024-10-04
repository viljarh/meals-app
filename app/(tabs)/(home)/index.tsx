import React from "react";
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import CategoryGrid from "@/components/CategoryGrid";
import { CATEGORIES } from "@/constants/categories";
import { Bars3Icon } from "react-native-heroicons/outline";

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
            pathname: "/MealsOverview",
            params: { categoryId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#201917]">
      <View className="ml-6">
        <TouchableOpacity>
          <Bars3Icon color="#E7BFAC" size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flex: 1,
          paddingBottom: 20,
          paddingTop: 20,
          paddingHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

import { Dimensions, Text, TouchableOpacity, View } from "react-native";

interface CategoryGridProps {
  title: string;
  color: string;
  onSelect: () => void;
}

const CategoryGrid = ({ title, color, onSelect }: CategoryGridProps) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={{ width: screenWidth / 2 - 15, padding: 10 }}>
      <TouchableOpacity
        style={{
          borderRadius: 20,
          backgroundColor: color,
          height: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onSelect}
      >
        <Text className="text-white font-bold text-lg text-right">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CategoryGrid;

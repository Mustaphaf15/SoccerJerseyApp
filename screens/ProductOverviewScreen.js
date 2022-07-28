import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ProductItem from "../components/ProductItem";
import { Product } from "../data/dummy-data";

function ProductOverviewScreen({ route, navigation }) {
  const displayedProduct = Product.filter((ProductItem) => {});

  function renderProductItem(itemData) {
    const item = itemData.item;

    const productItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <ProductItem {...ProductItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
}

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

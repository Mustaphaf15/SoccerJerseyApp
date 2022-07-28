import { View, Text, StyleSheet } from "react-native";

function ProductDetails({ id, title, imageUrl, price }) {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.detailItem, textStyle]}>{title}</Text>
      <Text style={[styles.detailItem, textStyle]}>{price} DH</Text>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

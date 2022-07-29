import { Text, View, StyleSheet } from "react-native";

const JerseyDetails = ({ price, description, styleText, style }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, styleText]}>{price}</Text>
      <Text style={[styles.detailItem, styleText]}>{description}</Text>
    </View>
  );
};

export default JerseyDetails;

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

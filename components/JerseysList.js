import { View, FlatList, StyleSheet } from "react-native";
import JerseyItem from "./JerseyItem";

const JerseysList = ({ items }) => {
  function renderJerseyItem(itemData) {
    const item = itemData.item;

    const JerseyItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      description: item.description,
    };
    return <JerseyItem {...JerseyItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderJerseyItem}
      />
    </View>
  );
};

export default JerseysList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

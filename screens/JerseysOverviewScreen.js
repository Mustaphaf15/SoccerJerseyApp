import { View, Text, StyleSheet, FlatList } from "react-native";
import JerseyItem from "../components/JerseyItem";
import { CLUBS, JERSEYS } from "../data/dummy-data";
import { useEffect } from "react";

const JerseysOverviewScreen = ({ route, navigation }) => {
  const clId = route.params.clubId;

  const displayedJerseys = JERSEYS.filter((jerseyItem) => {
    return jerseyItem.clubIds.indexOf(clId) >= 0;
  });

  useEffect(() => {
    const clubTitle = CLUBS.find((club) => club.id === clId).title;
    navigation.setOptions({
      title: clubTitle,
    });
  }, [clId, navigation]);

  const renderJerseyItem = (itemData) => {
    const item = itemData.item;
    const jerseyItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      description: item.description,
    };
    return <JerseyItem {...jerseyItemProps} />;
  };

  return (
    <View style={style.container}>
      <FlatList
        data={displayedJerseys}
        keyExtractor={(item) => item.id}
        renderItem={renderJerseyItem}
      />
    </View>
  );
};

export default JerseysOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

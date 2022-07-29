import { CLUBS } from "../data/dummy-data";
import { FlatList } from "react-native";
import ClubGridTile from "../components/ClubGridTile";

const ClubsScreen = ({ navigation }) => {
  const renderClubItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("JerseysOverview", {
        clubId: itemData.item.id,
      });
    };

    return (
      <ClubGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CLUBS}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderClubItem}
    />
  );
};

export default ClubsScreen;

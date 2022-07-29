import { Image, ScrollView, View, StyleSheet, Text } from "react-native";
import List from "../components/JerseyDetail/List";
import Subtitle from "../components/JerseyDetail/Subtitle";
import JerseyDetails from "../components/JerseyDetails";
import { JERSEYS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favotites";

const JerseysDetailScreen = ({ route, navigation }) => {
  const jerseyId = route.params.jerseyId;
  const favoriteJerseysIds = useSelector((state) => state.favoriteJerseys.ids);
  const dispatch = useDispatch();
  const JerseysFavorite = favoriteJerseysIds.includes(jerseyId);

  const headerButtonPressedHandler = () => {
    if (jerseysFavorite) {
      dispatch(removeFavorite({ id: jerseyId }));
    } else {
      dispatch(addFavorite({ id: jerseyId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={jerseysFavorite ? "star" : "star-outline"}
            size={24}
            color="white"
            onPress={headerButtonPressedHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressedHandler]);

  const selectJersey = JERSEYS.find(
    (jersey) => jersey.id === route.params.jerseyId
  );

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectJersey.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectJersey.title}</Text>
      <JerseyDetails price={selectJersey.price} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Description</Subtitle>
          <List data={selectJersey.description} />
        </View>
      </View>
    </ScrollView>
  );
};

export default JerseysDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

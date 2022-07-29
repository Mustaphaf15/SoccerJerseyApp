import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import JerseysList from "../components/JerseysList";
import { JERSEYS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteJerseysIds = useSelector((state) => state.favoriteJerseys.ids);
  const favoriteJerseys = JERSEYS.filter((jersey) =>
    favoriteJerseysIds.includes(jersey.id)
  );

  return <JerseysList items={favoriteJerseys} />;
};

export default FavoriteScreen;

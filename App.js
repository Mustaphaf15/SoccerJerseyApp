import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import ClubsScreen from "./screens/ClubsScreen";
import JerseysOverviewScreen from "./screens/JerseysOverviewScreen";
import JerseysDetailScreen from "./screens/JerseysDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

DrawerNavigatorBuilder = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#3f2f25",
      }}
    >
      <Drawer.Screen
        name="Clubs"
        component={ClubsScreen}
        options={{
          title: "Clubs",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="club" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="JerseysClubs"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#351401" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigatorBuilder}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="JerseysOverview"
              component={JerseysOverviewScreen}
            />
            <Stack.Screen
              name="JerseyDetails"
              component={JerseysDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

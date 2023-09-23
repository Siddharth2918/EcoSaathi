import SignUpPage from "./src/screens/SignUpPage";
import LogInPage from "./src/screens/LogInPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasePage from "./src/screens/BasePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForumPage from "./src/screens/ForumPage";
import ProfilePage from "./src/screens/ProfilePage";
import EventsPage from "./src/screens/EventsPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="EcoSaathiForum" component={ForumPage}></Tab.Screen>
        <Tab.Screen name="EventsPage" component={EventsPage}></Tab.Screen>
        <Tab.Screen name="ProfilePage" component={ProfilePage}></Tab.Screen>
      </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BasePage" component={BasePage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
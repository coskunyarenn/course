import {StatusBar} from "expo-status-bar"
import {Pressable, StyleSheet, Text, View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ManageCourse from "./screens/ManageCourse"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import RecentCourses from "./screens/RecentCourses"
import AllCourses from "./screens/AllCourses"
import {FontAwesome, Entypo, AntDesign} from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  function CourseOverview() {
    return (
      <Tab.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: "#0D0851",
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#0D0851",
          },
          tabBarActiveTintColor: "white",
          headerRight: () => (
            <Pressable
              style={({pressed}) => pressed && styles.pressed}
              onPress={() => {
                navigation.navigate("ManageCourse")
              }}
            >
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </Pressable>
          ),
        })}
      >
        <Tab.Screen
          name="RecentCourses"
          component={RecentCourses}
          options={{
            title: "Yakın Zamanda Kaydolunanlar",
            tabBarLabel: "Yakın Zamanda",
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="hourglass-o" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AllCourses"
          component={AllCourses}
          options={{
            title: "Tüm Kurslar",
            tabBarIcon: ({color, size}) => (
              <Entypo name="list" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CourseOverview"
          component={CourseOverview}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.5,
  },
})

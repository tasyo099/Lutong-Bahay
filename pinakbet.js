import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
} from "react-native";


//  You need to install these two module for navigation
//  Run the following commands using your terminal:
/*
	$npm install @react-navigation/native
	$expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	$npm install @react-navigation/stack
*/

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

/*Dummy Data for Menus*/
const Menus = [
  {
    url: "https://i.imgur.com/kguI763.jpg",
    menuTitle: "Filipino Chicken Adobo",
    menuDesc:
      "Instructions.Step 1: Saute garlic, onion, tomato, pork and bagoong in oil. Pour water and simmer for 10 minutes."
    

  }, 

  {
    url: "https://i.imgur.com/3j6sS4q.jpg",
    menuTitle: "Sinigang",
    menuDesc:
      "The quality of this dish depends on the souring agent. This is the ingredient that makes the soup sour. The most common and widely used is unripe tamarind.",
  },
  {
    url: "https://i.imgur.com/Xq5T6OR.jpg",
    menuTitle: "Pinakbet", 
  },
];


/*Homescreen Component*/
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/resto-bg.jpg")}
        style={styles.imageBG}
      >
        <View style={[styles.rowCenter, { marginTop: -150 }]}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

        <Text style={styles.brandName}>FOODISTIC</Text>

        <Text style={styles.label}>Use Email to Sign in: </Text>
        <View style={styles.rowCenter}>
          <TextInput style={styles.inputTextbox} />
        </View>
        
        <View style={styles.rowCenter}>
          <View style={[{ width: 120, marginTop: 4 }]}>
            <Button
              title="Sign In"
              color="#fca311"
              onPress={() => navigation.navigate("Menu")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

/*Menu Details Component*/
function MenuDetail(props) {
  return (
    <View>
      <Text></Text>
      <Text>{props.route.params.menuTitle}</Text>
      <Text>{props.route.params.menuDesc}</Text>
    </View>
  );
}

/*Menu List Component*/
function MenuScreen({ navigation }) {
  return (
    <ScrollView>
      {Menus.map((menu, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
            onPress={() => navigation.navigate(menu.menuTitle)}
          >
            <View style={styles.cardRounded}>
              <Image style={styles.cardImage} source={{ uri: menu.url }} />
              <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
  
              </View>
              <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
              <Text style={styles.menuDesc} numberOfLines={2}>
                {menu.menuDesc}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}


/*Main Component*/
const Stack = createStackNavigator(); //Create stack navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#e9967a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Menu" component={MenuScreen} /> 
		
		
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
			
            initialParams={{
              url: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}
	
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*Custom Styling*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  brandName: {
    margin: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
  },

  label: {
    marginTop: 5,
    color: "#ecf0f1",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputTextbox: {
    margin: 5,
    width: 250,
    height: 50,
    borderColor: "#e9967a",
    borderWidth: 2,
    borderRadius: 5,
    color: "#14213d",
    padding: 15,
    fontSize: 20,
    backgroundColor: "#ecf0f1",
  },

  btnRounded: {
    borderRadius: 5,
    margin:5
  },

  cardRounded: {
    height: 300,
    backgroundColor: "#fca311",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImage: {
    width: 363,
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuTitle: {
    fontSize: 24,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 10,
  },
  menuDesc: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  star: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 10,
  },
});

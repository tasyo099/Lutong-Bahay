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
    url: "https://th.bing.com/th/id/R91d66629662742fd72ccb3f534276fa7?rik=H5uyYuayaI932Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-YY7tXZSfwOo%2fTiPxpYze4mI%2fAAAAAAAAALk%2fuVNtnBJawhc%2fw1200-h630-p-k-nu%2fdinuguan%2brecipe.jpg&ehk=P6iAVmw126scjZIc%2fiGt4FTucN0V64ojASSyUi4eW0Y%3d&risl=&pid=ImgRaw",
    menuTitle: "Pork Dinuguan",
    menuDesc: "Ingredients",
    menuRecipe: "2 Tbsp. cooking oil",
    menuRecipe1: "2 cloves garlic chopped",
    menuRecipe2: "2 cups pork liver sliced into cubes",
    menuRecipe3: "1/2 cup vinegar",
    menuRecipe4: "2 Tbsp. patis",
    menuRecipe5: "1 Tbsp. salt",
    menuRecipe6: "1/4 Tbsp. MSG",
    menuRecipe7: "1-1/2 cup pork meat stock",
    menuRecipe8: "1 cup pig's blood",
    menuRecipe9: "2 tsp. sugar",
    menuRecipe10: "3 pcs. green chili peppers",
    menuRecipe11: "1/4 tsp. oregano",
    menuRecipe12: "Instruction",
    menuRecipe13: "How to cook dinuguan",
    menuRecipe14: "Cook the pork in approximately 3 cups of water for 30 minutes.",
    menuRecipe15: "Let it cool then slice the pork into cubes. Set aside the meat stock.",
    menuRecipe16: "In a wok or kawali, sauté the garlic and onion in oil for 5 minutes.",
    menuRecipe17: "Then add the pork, liver, patis, MSG and salt.",
    menuRecipe18: "Then pour in the vinegar and boil without stirring.",
    menuRecipe19: "Afterwards pour in the meat stock and simmer for 10 minutes.",
    menuRecipe20: "Add the pig's blood and sugar and stir occasionally until the mixture thickens.",
    menuRecipe21: "Put the oregano and green chili then let it simmer again for 5 minutes.",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",

  },
  {
    url: "https://cdn.nutrition.ph/wp-content/uploads/2019/06/bicol-express.jpg",
    menuTitle: "Bicol Express",
    menuDesc: "Ingredients",
    menuRecipe: "1/4 kilo pork, thinly sliced",
    menuRecipe1: "8 pcs birds eye chili or jalapeno peppers",
    menuRecipe2: "1 onion, minced",
    menuRecipe3: "1 head of garlic, minced",
    menuRecipe4: "1 cup coconut milk",
    menuRecipe5: "1 cup coconut cream",
    menuRecipe6: "2 tablespoons of cooking oil",
    menuRecipe7: "Salt to taste",
    menuRecipe8: "",
    menuRecipe9: "",
    menuRecipe10: "",
    menuRecipe11: "",
    menuRecipe12: "How To Cook",
    menuRecipe13: "In a bowl of water with salt, soak chili peppers for 30 minutes then rinse and strain.",
    menuRecipe14: "In a cooking pan, heat cooking oil and brown sliced pork for a few minutes.",
    menuRecipe15: "In another pan, saute minced garlic and onion.",
    menuRecipe16: "Add to the saute the browned pork.",
    menuRecipe17: "Then add the coconut milk, bring to a boil and simmer for 10 minutes.",
    menuRecipe18: "Add the chili peppers and cook until dish gets a little dry.",
    menuRecipe19: "Add the coconut cream and simmer until the sauce thickens.",
    menuRecipe20: "Salt to taste.",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",
  },
  {
  url: "https://images-ext-1.discordapp.net/external/4afvCcQKd6FH4sf2Ec_lto0t8KUGlN0D4ob_8FomFz0/%3Fpid%3DImgDet%26rs%3D1/https/th.bing.com/th/id/OIP.wjI1vYIfOjdJ1ERcUZMAxgHaG8",
  menuTitle: "Pork Sisig",
  menuDesc: "Ingredients",
  menuRecipe: "1-1/2 lbs pork cheeks (or 2 lbs deboned pork hocks)",
  menuRecipe1: "1/2 lb beef or pork tongue",
  menuRecipe2: "1/2 lb beef or pork heart",
  menuRecipe3: "1/2 lb liver (pork, beef or chicken)",
  menuRecipe4: "2 cups water (for boiling)",
  menuRecipe5: "1 cup pineapple juice (for boiling)",
  menuRecipe6: "1 tsp whole black peppers (for boiling)",
  menuRecipe7: "",
  menuRecipe8: "",
  menuRecipe9: "",
  menuRecipe10: "",
  menuRecipe11: "",
  menuRecipe12: "Instruction",
  menuRecipe13: "How to cook",
  menuRecipe14: "Combine pork cheeks (or deboned pork hocks), heart, and tongue in pineapple juice, salt, water and crushed whole black pepper and bring to a boil; simmer for about 1 hour or until tender.",
  menuRecipe15: "Drain and cool to room temperature.",
  menuRecipe16: "Slice pork cheeks/hocks, liver, heart and tongue, into 2″ X 3″ X 1/4 thick pieces.",
  menuRecipe17: "Place in bamboo skewers and grill over charcoal briquettes until pork rind is crisp and browned.",
  menuRecipe18: "Chop the grilled pork cheeks/hocks, liver, heart, and tongue into 1/4 inch sized cubes;",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
  },

  {

  url: "data:image/jpeg;base64,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",
    menuTitle: "Sinigang na Baboy",
    menuDesc: "Ingredients",
    menuRecipe: "1/2 kilo cubed pork",
    menuRecipe1: "1/2 kilo pork ribs",
    menuRecipe2: "1 small bunch spring onion",
    menuRecipe3: "1 kilo ripe tomatoes",
    menuRecipe4: "4 pieces gabi cut in half",
    menuRecipe5: "1/2 kilo sampaloc tamarind",
    menuRecipe6: "10 cups rice washing or water",
    menuRecipe7: "1 bunch kangkong",
    menuRecipe8: "1 bunch sitaw",
    menuRecipe9: "2 pieces eggplant cut in 1 inch pieces",
    menuRecipe10: "2 pieces radish cut in 1 inch pieces",
    menuRecipe11: "patis to taste",
    menuRecipe12: "Instruction",
    menuRecipe13: "In a large pot, put together the cubed pork, the ribs, green onion and tomatoes mashed with a fork.",
    menuRecipe14: "Cover and simmer for 30 minutes till meat is tender.",
    menuRecipe15: "In another pot put in the sampaloc with the water.",
    menuRecipe16: "Boil for about 10 minutes until the sampaloc is soft and mushy. Strain sampaloc water.",
    menuRecipe17: "When the meat is just tender but not overcooked, pour the sampaloc water into the large pot.",
    menuRecipe18: "Add the vegetables according to firmness, beginning with the gabi, then the radish, sitaw and kangkong in the last few minutes of cooking.",
    menuRecipe19: "Season with patis. The chilies may be added if a hot fiery sinigang is desired.",
    menuRecipe20: "",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",

}, 

{
  url: "https://th.bing.com/th/id/R7bbd0914e4500c6ef733eec9e3825320?rik=vz0RKJDtYmjiIA&riu=http%3a%2f%2fwww.magluto.com%2fwp-content%2fgallery%2fpinoy-food-photo%2ffilipino-recipe-pigar-pigar14.jpg&ehk=Ra5XDnMsw5QCIRr4PgYIg80R8NPLnA38UvacxfyFDfA%3d&risl=&pid=ImgRaw",
  menuTitle: "Pigar Pigar",
  menuDesc: "Ingredients",
  menuRecipe: "1 lb (453 g) sirloin beef, sliced thinly",
  menuRecipe1: "1 cup (120 g) liver, sliced thinly (optional)",
  menuRecipe2: "1 large onion, sliced into rings",
  menuRecipe3: "1 tsp salt",
  menuRecipe4: "1/2 tsp black pepper",
  menuRecipe5: "4 tbsp soy sauce (or more, to taste)",
  menuRecipe6: "1/2 head of cabbage, chopped",
  menuRecipe7: "Cooking oil (canola, peanut, or vegetable)",
  menuRecipe8: "Distilled white vinegar",
  menuRecipe9: "Fish sauce",
  menuRecipe10: "",
  menuRecipe11: "",
  menuRecipe12: "Instruction",
  menuRecipe13: "Cut the sirloin beef into thin slices. While there’s no precise measurement for the meat pieces, authentic pigar pigar features thinly sliced pieces of sirloin beef. Slice thin pieces of beef that are 2 in (5.1 cm) to 3 in (7.6 cm) long.",
  menuRecipe14: "Put the sliced beef, salt, pepper, and soy sauce into a deep bowl. Use a spoon or your hands to mix the ingredients together until they are well combined. 4 tablespoons of soy sauce is the minimum amount for the marinade, but you can definitely add more if you prefer.",
  menuRecipe15: "Cover the bowl and put it in the refrigerator for about 1 hour. Stretch plastic wrap over the bowl or cover it with a plate. Tuck the bowl into your fridge and let the meat marinate in the spiced soy sauce for at least 1 hour.",
  menuRecipe16: "Remove the bowl from the fridge and stir the meat. Take off the plastic wrap and give the meat one last stir to make sure everything is thoroughly combined. Most of the soy sauce will be soaked up by the meat at this point.",
  menuRecipe17: "",
  menuRecipe18: "",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",


},


{
  url: "https://nutriasia.com/wp-content/uploads/2017/10/kare-kare.png",
  menuTitle: "Kare Kare",
  menuDesc: "Ingredients",
  menuRecipe: "1/4 kilo tripe, or tuwalya, cut into squares, rinsed, scrubbed well with salt",
  menuRecipe1: "1 tablespoon vinegar",
  menuRecipe2: "1/4 cup cooking oil",
  menuRecipe3: "1 teaspoon atsuete seeds",
  menuRecipe4: "1 medium red onion, peeled, chopped",
  menuRecipe5: "3 cloves garlic, peeled, chopped",
  menuRecipe6: "1/2 kilo beef shanks, or pork shanks, cut 1-inch thick",
  menuRecipe7: "1 bunch string beans, cut into 3-inch lengths",
  menuRecipe8: "2 eggplants, cut into wedges",
  menuRecipe9: "2 bunches pechay, separated",
  menuRecipe10: "1/2 cup peanuts, pounded into a paste",
  menuRecipe11: "1/4 cup rice, toasted, pounded into a powder",
  menuRecipe12: "Instruction",
  menuRecipe13: "In a pressure cooker over medium heat, add tripe, vinegar, and enough water to cover. Bring to a boil. Boil 10 minutes, discard water, and refill. Boil again, cover, and lock lid. Simmer until tripe is tender, about 40 minutes. Discard water, and set tripe aside.",
  menuRecipe14: "Meanwhile, in a pot over medium heat, heat oil. Add atsuete. Cook, stirring occasionally, to release its color. Use a slotted spoon to remove and discard seeds. Add onion; cook until softened. Add garlic; cook until fragrant.",
  menuRecipe15: "Transfer mixture to pressure cooker. Add pork shanks and tripe. Pour in enough water to cover. Bring to a boil, then simmer. Remove and discard any scum that rises to the surface. Cover, and lock lid. Cook until softened, about 30 minutes.",
  menuRecipe16: "Release pressure then unlock lid. Add string beans, eggplants, and pechay. Mix peanut paste and toasted rice powder together. Add to pot, and stir in. Simmer, and let thicken. Serve with bagoong on the side.",
  menuRecipe17: "",
  menuRecipe18: "",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",

},



{
  url: "https://th.bing.com/th/id/OIP.Ix_1xp9qdzT_0LZYm2r7_gHaLH?pid=ImgDet&rs=1",
  menuTitle: "Escabeche",
  menuDesc: "Ingredients",
  menuRecipe: "one whole fleshy fish (lapulapu, red snapper, carp or mackerel)",
  menuRecipe1: "1 tsp salt",
  menuRecipe2: "1 tsp pepper",
  menuRecipe3: "some flour to dredge the fish in",
  menuRecipe4: "1 tsp minced garlic",
  menuRecipe5: "1 tbsp ginger root,  cut into thin strips",
  menuRecipe6: "1/2 cup sliced onions",
  menuRecipe7: "1 cup red and green bell peppers, cut into strips",
  menuRecipe8: "2 tbsp lard or oil",
  menuRecipe9: "2 cups water",
  menuRecipe10: "1/4 cup vinegar",
  menuRecipe11: "1/4 cup brown sugar",
  menuRecipe12: "How To Cook",
  menuRecipe13: " Rub the fish with salt and pepper. Dredge with flour and then deep-fry in very hot oil.  Set aside.",
  menuRecipe14: "In a skillet, lightly sauté garlic, ginger, onions and bell peppers in lard or oil. Don’t overcook the onions and bell peppers. Set aside.",
  menuRecipe15: "In the pan, mix together the water, vinegar, sugar, soy sauce, corn starch, salt and pepper. Simmer for about 5 minutes or until the starch is cooked and thickens the mixture.",
  menuRecipe16: "Place the fish on a platter and pour over it the sauce prepared in step 3.",
  menuRecipe17: "Arrange the sauteed ginger, onions and peppers on top of the fish and serve.",
  menuRecipe18: "",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
},

{
  url: "https://www.kawalingpinoy.com/wp-content/uploads/2016/12/Chicken-Menudo-3-1-500x500.jpg",
  menuTitle: "Menudo",
  menuDesc: "Ingredients",
  menuRecipe: "2 lbs. pork",
  menuRecipe1: "  1 cup potatoes diced ",
  menuRecipe2: "  1/2 cup soy sauce",
  menuRecipe3: "  1/2 piece lemon",
  menuRecipe4: "1 piece onion chopped",
  menuRecipe5: "3 cloves garlic minced",
  menuRecipe6:   "1 teaspoon sugar",
  menuRecipe7: " 3/4 cup tomato sauce",
  menuRecipe8: "1 cup water",
  menuRecipe9: " 4 pieces hotdogs sliced diagonally",
  menuRecipe10: "2 tablespoons cooking oil",
  menuRecipe11: "  2 tablespoons cooking oil",
  menuRecipe12: "  2 to 3 pieces dried bay leaves",
  menuRecipe13: "Instructions",
  menuRecipe14: "Combine pork, soysauce, and lemon in a bowl. Marinate for at least 1 hour.",
  menuRecipe15: "Heat oil in a pan",
  menuRecipe16: "Saute garlic and onion.",
  menuRecipe17: "Add the marinated pork. Cook for 5 to 7 minutes.",
  menuRecipe18: "Pour in tomato sauce and water and then add the bay leaves.Let boil and simmer for 30 minutes to an hour depending on the toughness of the pork. Note: Add water as necessary.",
  menuRecipe19: "Add-in the liver and hot dogs.Cook for 5 minutes.",
  menuRecipe20: "Put-in potatoes, carrots, sugar,salt, and pepper. Stir and cook for 8 to 12 minutes.",
  menuRecipe21: "Serve. Share and enjoy!",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
  
},


{
  url: "https://cdn.shopify.com/s/files/1/1717/1391/articles/monroe_county_pork_steaks_c_1112x.jpg?v=1587081253",
  menuTitle: "pork steak",
  menuDesc: "Ingredients",
  menuRecipe: "5 pork shoulder steaks",
  menuRecipe1: "1 pinch seasoned salt to taste",
  menuRecipe2: "⅛ teaspoon seasoned pepper to taste",
  menuRecipe3: "2 cups apple cider vinegar",
  menuRecipe4: "1 ½ cups water",
  menuRecipe5: "",
  menuRecipe6: "",
  menuRecipe7: "",
  menuRecipe8: "",
  menuRecipe9: "",
  menuRecipe10: "",
  menuRecipe11: "",
  menuRecipe12: "How To Cook",
  menuRecipe13: " Preheat grill to medium-low heat.",
  menuRecipe14: "Season the pork steaks on both sides with seasoned salt and seasoned pepper. In a large bowl, stir together the vinegar and water, and season with seasoned salt and seasoned pepper to taste.",
  menuRecipe15: "Lightly oil the grill grate. Place pork steaks on the grill. Baste steaks with the vinegar mixture on both sides during the first 15 minutes of grilling. Continue to cook steaks to desired doneness, 10 to 15 more minutes. Discard remaining vinegar mixture.",
  menuRecipe16: "",
  menuRecipe17: "",
  menuRecipe18: "",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
},

{
  url: "https://th.bing.com/th/id/OIP.duuc43ZLnfnc8muJ2vgEhgHaFV?pid=ImgDet&rs=1",
  menuTitle: "Dinakdakan",
  menuDesc: "Ingredients",
  menuRecipe: "1 lb. pig ears",
  menuRecipe1: "1 lb. pig face maskara",
  menuRecipe2: "6 ounces pig liver",
  menuRecipe3: "1 teaspoon ginger powder",
  menuRecipe4: "1 medium red onion sliced",
  menuRecipe5: "6 green and red chili chopped",
  menuRecipe6: "4 tablespoons white or cane vinegar",
  menuRecipe7: "1 teaspoon garlic powder optional",
  menuRecipe8: "1 tablespoon minced ginger",
  menuRecipe9: "3 pieces bay leaves optional",
  menuRecipe10: "1 tablespoon whole peppercorn optional",
  menuRecipe11: "3/4 cup mayonnaise",
  menuRecipe12: "How To Cook",
  menuRecipe13: "Pour 6 to 8 cups water in a cooking pot. Let boil.",
  menuRecipe14: "Once the water starts to boil, you have the option to add dried bay leaves and whole peppercorn. Add-in the pig ears and face. Set the heat to low and continue to boil for 50 to 60 minutes.",
  menuRecipe15: "Discard the water and let the excess water drip. Rub a little bit of salt all over the boiled ears and face. Rub the ginger powder on the liver.",
  menuRecipe16: "Heat-up the grill. Grill the ears and face for 4 to 6 minutes per side or until it turns a bit crisp, but not burnt. Grill the liver for 5 to 8 minutes depending on the thickness.",
  menuRecipe17: "Remove the grilled pig parts from the grill. Let it cool down and start chopping into bite-size pieces.",
  menuRecipe18: "Meanwhile, combine mayonnaise and vinegar in mixing bowl. Stir.",
  menuRecipe19: "Add some ground black pepper. Continue to stir until the ingredients are well blended.",
  menuRecipe20: "Add the ginger, chili, onion, and garlic powder (optional). Toss.",
  menuRecipe21: "Add more salt if needed.",
  menuRecipe22: "Transfer to a serving bowl. Serve.",
  menuRecipe23: "Share and enjoy!",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
}
  
];

/*Homescreen Component*/
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.imageBG}
      >
        <View style={[styles.rowCenter, { marginTop: -150 }]}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

        <Text style={styles.brandName}>Lutong Bahay</Text>

        <Text style={styles.label}>Email: </Text>
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
      <Text>{props.route.params.menuTitle}</Text>
      <Text>{props.route.params.menuDesc}</Text>
      <Text>{props.route.params.menuRecipe1}</Text>
      <Text>{props.route.params.menuRecipe2}</Text>
      <Text>{props.route.params.menuRecipe3}</Text>
      <Text>{props.route.params.menuRecipe4}</Text>
      <Text>{props.route.params.menuRecipe5}</Text>
      <Text>{props.route.params.menuRecipe6}</Text>
      <Text>{props.route.params.menuRecipe7}</Text>
      <Text>{props.route.params.menuRecipe8}</Text>
      <Text>{props.route.params.menuRecipe9}</Text>
      <Text>{props.route.params.menuRecipe10}</Text>
      <Text>{props.route.params.menuRecipe11}</Text>
      <Text>{'\n'}{props.route.params.menuRecipe12}</Text>
      <Text>{props.route.params.menuRecipe13}</Text>
      <Text>{props.route.params.menuRecipe14}</Text>
      <Text>{props.route.params.menuRecipe15}</Text>
      <Text>{props.route.params.menuRecipe16}</Text>
      <Text>{props.route.params.menuRecipe17}</Text>
      <Text>{props.route.params.menuRecipe18}</Text>
      <Text>{props.route.params.menuRecipe19}</Text>
      <Text>{props.route.params.menuRecipe20}</Text>
      <Text>{props.route.params.menuRecipe21}</Text>
      <Text>{props.route.params.menuRecipe22}</Text>
      <Text>{props.route.params.menuRecipe23}</Text>
      <Text>{props.route.params.menuRecipe24}</Text>
      <Text>{props.route.params.menuRecipe25}</Text>
      <Text>{props.route.params.menuRecipe26}</Text>
      <Text>{props.route.params.menuRecipe27}</Text>
      <Text>{props.route.params.menuRecipe28}</Text>
      <Text>{props.route.params.menuRecipe29}</Text>
      <Text>{props.route.params.menuRecipe30}</Text>
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
            backgroundColor: "#ff7f50",
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
              menuRecipe: menu.menuRecipe,
              menuRecipe1: menu.menuRecipe1,
              menuRecipe2: menu.menuRecipe2,
              menuRecipe3: menu.menuRecipe3,
              menuRecipe4: menu.menuRecipe4,
              menuRecipe5: menu.menuRecipe5,
              menuRecipe6: menu.menuRecipe6,
              menuRecipe7: menu.menuRecipe7,
              menuRecipe8: menu.menuRecipe8,
              menuRecipe9: menu.menuRecipe9,
              menuRecipe10: menu.menuRecipe10,
              menuRecipe11: menu.menuRecipe11,
              menuRecipe12: menu.menuRecipe12,
              menuRecipe13: menu.menuRecipe13,
              menuRecipe14: menu.menuRecipe14,
              menuRecipe15: menu.menuRecipe15,
              menuRecipe16: menu.menuRecipe16,
              menuRecipe17: menu.menuRecipe17,
              menuRecipe18: menu.menuRecipe18,
              menuRecipe19: menu.menuRecipe19,
              menuRecipe20: menu.menuRecipe20,
              menuRecipe21: menu.menuRecipe21,
              menuRecipe22: menu.menuRecipe22,
              menuRecipe23: menu.menuRecipe23,
              menuRecipe24: menu.menuRecipe24,
              menuRecipe25: menu.menuRecipe25,
              menuRecipe26: menu.menuRecipe26,
              menuRecipe27: menu.menuRecipe27,
              menuRecipe28: menu.menuRecipe28,
              menuRecipe29: menu.menuRecipe29,
              menuRecipe30: menu.menuRecipe30,

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
    color: "#ffffe0",
    textAlign: "center",
    fontFamily: "Roboto",

  },

  label: {
    marginTop: 5,
    color: "#ffffe0",
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
    margin: 5
  },

  cardRounded: {
    height: 300,
    backgroundColor: "#ff7f50",
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
    height: 250,
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
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff7f50",
    width: 150,
    alignSelf: "center",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: "auto"
  },
  appButtonText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

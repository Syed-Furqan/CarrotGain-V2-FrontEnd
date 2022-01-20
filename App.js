import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import MovieHome from './Screens/Movies/MovieHome';
import MovieDetails from './Screens/Movies/MovieDetails';
import MovieSearch from './Screens/Movies/MovieSearch';
import { Platform } from 'react-native';

import {Home, Search, Contact, TV, Anime, Movie, Game} from './TopLabel';

// Movies.
const MoviesStack = createStackNavigator();

// Creating two Stack Navigators for Movies.
const MoviesHomeScreenStack = () => (
  <MoviesStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#151515'}, headerTintColor: 'white'}} >
    <MoviesStack.Screen name='Home' component={MovieHome} options={{headerShown: false}} />
    <MoviesStack.Screen name='Details' component={MovieDetails} options={({route}) => ({title: route.params.name})}/>
  </MoviesStack.Navigator>
);

const MoviesSearchScreenStack = () => (
  <MoviesStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#151515'}, headerTintColor: 'white'}} >
    <MoviesStack.Screen name='Search' component={MovieSearch} options={{headerShown: false}} />
    <MoviesStack.Screen name='Details' component={MovieDetails} options={({route}) => ({title: route.params.name})}/>
  </MoviesStack.Navigator>
);

// Creating top tab navigator containing above stacks in each tab for movies.
const MoviesTopTabs = createMaterialTopTabNavigator();

const MovieDrawer = () => (
  <MoviesTopTabs.Navigator
      tabBarOptions={{
        labelStyle: {fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: '#c29e17'},
        inactiveTintColor: 'white',
        activeTintColor: '#c29e17',
        style: {backgroundColor: 'black', paddingTop: Platform.OS == 'ios' ? 50 : 0}
      }}
  >
    <MoviesTopTabs.Screen 
      options={{tabBarLabel: Home}}
      name='Home'
      component={MoviesHomeScreenStack}
    />
    <MoviesTopTabs.Screen 
      options={{tabBarLabel: Search}}
      name='Search' 
      component={MoviesSearchScreenStack}
    />
    <MoviesTopTabs.Screen 
      options={{tabBarLabel: Contact}}
      name='About' 
      component={About}
    />
  </MoviesTopTabs.Navigator>
);

// Anime.
// Space For Anime.


// TV Series.
// Space for TV Series.


// Gaming.
// Space for Games.

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: 'black',
          activeTintColor: '#c29e17',
          inactiveTintColor: 'black',
          labelStyle: {fontWeight: 'bold', fontSize: 17},
          style: {backgroundColor: '#c29e17'}
        }}
      >
        <Drawer.Screen options={{tabBarLabel: Movie}} name='Movies' component={MovieDrawer} />
        <Drawer.Screen options={{tabBarLabel: TV}} name='TV Series' component={About} />
        <Drawer.Screen options={{tabBarLabel: Anime}} name='Anime' component={About} />
        <Drawer.Screen options={{tabBarLabel: Game}} name='Gaming' component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
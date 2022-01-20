import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Home = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
      <Entypo name="home" size={24} color="white" />
      <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>Home</Text>
    </View>
);
  
const Search = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>Search</Text>
    </View>
);
  
const Contact = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome5 name="user-alt" size={24} color="white" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>About</Text>
    </View>
);

const Movie = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons name="movie-open" size={24} color="black" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>About</Text>
    </View>
);

const Game = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <Entypo name="game-controller" size={24} color="black" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>About</Text>
    </View>
);

const TV = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <Entypo name="tv" size={24} color="black" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>About</Text>
    </View>
);

const Anime = () => (
    <View style={{color: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <MaterialIcons name="animation" size={24} color="black" />
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>About</Text>
    </View>
);

export {Home, Search, Contact, Game, TV, Anime, Movie};
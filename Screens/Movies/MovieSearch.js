import { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default MovieSearch = ({navigation}) => {
    const API_KEY = '8b5f46448783f704c3aac11d3c1e0695';
    const [movieName, setMovieName] = useState(null);
    const [movies, setmovies] = useState([]);
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&include_adult=false`;
    const baseImageURL = 'https://image.tmdb.org/t/p/original';

    const handleSearch = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setmovies(data.results))
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput 
                    style={styles.search__input}
                    placeholder="Search"
                    placeholderTextColor='white'
                    onChangeText={val => setMovieName(val)}
                />
                <TouchableOpacity activeOpacity={0.5} onPress={handleSearch}>
                    <Text style={{color: '#c29e17', height: 45, justifyContent: 'center', alignItems: "center", padding: 5}}>
                        <MaterialIcons name="search" size={35}/>
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.list}>
                    {movies.length ? movies.map(movie => (
                        <TouchableOpacity 
                            key={movie.id}
                            activeOpacity={0.5} 
                            onPress={() => navigation.navigate('Details', {id: movie.id, name: movie.title})}
                        >
                            <View style={styles.list__movie}>
                                <Image 
                                    source={{uri: `${baseImageURL}${movie.poster_path}`}}
                                    style={styles.list__movie_img}
                                />
                                <View style={styles.list__movie_content}>
                                    <Text style={{color: 'white', width: '100%', fontWeight: 'bold'}}>{movie?.title}</Text>
                                    <Text style={{color: '#aaaaaa', marginTop: 10,}}>{movie?.release_date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )) : <Text 
                            style={{width: '100%',fontSize: 20, color: 'white', marginTop: 100, textAlign: 'center'}}
                         >
                            Search Anything
                         </Text>
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    search: {
        backgroundColor: '#202020',
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    search__input :{
        width: '80%', 
        height: 50,
        borderWidth: 1, 
        borderColor: 'gray', 
        borderRadius: 4,
        color: 'white', 
        padding: 10,
        fontSize: 15,
    },
    list__movie: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#1e1e1e',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    list__movie_img: {
        width: 100,
        height: 140,
    },
    list__movie_content: {
        width: 250,
        paddingLeft: 10,
    }
});
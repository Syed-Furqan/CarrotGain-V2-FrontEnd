import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

export default MovieDetails = ({route, navigation}) => {
    const API_KEY = '8b5f46448783f704c3aac11d3c1e0695';
    const baseImageURL = 'https://image.tmdb.org/t/p/original';
    const URL = `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err))
    }, [URL]);

    return (
        <ScrollView>
            {movie 
                ? 
                <View style={styles.container}>
                    <Image 
                        style={{width: '100%', height: 220, resizeMode: 'cover'}} 
                        source={{uri: `${baseImageURL}${movie?.backdrop_path}`}} 
                    />
                    <View style={styles.overview}>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{movie.title}</Text>
                            <Text 
                                style={{color: '#9f9f9f', fontSize: 20, marginLeft: 10}}
                            >
                                    {`( ${movie.release_date.slice(0,4)} )`}
                            </Text>
                        </View>
                        <View style={{padding: 10}}>
                            <Text 
                                style={{color: '#9f9f9f', fontStyle: 'italic', fontWeight: '700', fontSize: 15, marginVertical: 20}}
                            >
                                {movie.tagline}
                            </Text>
                            <View>
                                <Text style={{color: '#e1e1e1', fontWeight: 'bold', marginBottom: 10, fontSize: 20}}>Overview</Text>
                                <Text style={{color: 'white'}}>{movie.overview}</Text>
                            </View>
                            <View style={{marginVertical: 10}}>
                                <Text style={styles.money}>{`Budget:  $${movie.budget}`}</Text>
                                <Text style={styles.money}>{`Revenue:  $${movie.revenue}`}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>Runtime: </Text>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>{`${movie.runtime}m`}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>Director: </Text>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Steven Spielberg</Text>
                            </View>
                        </View>
                    </View>
                </View>
                : 
                <Text>Loading ...</Text>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'arial, helvetica sans serif'
    },
    overview: {
        width: '100%',
        backgroundColor: 'black',
        padding: 10
    },
    name: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 20,
    },
    money: {
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold',
        borderWidth: 1, 
        borderColor: '#464646',
        padding: 10,
        marginVertical: 5,
        borderRadius: 4,
    },
});
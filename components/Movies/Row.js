import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Movie from "./Movie";

export default Row = ({URL, title, navigation}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.log(err))
    }, [URL]);

    return (
        <View style={styles.row}>
            <Text editable={false} style={styles.row__header}>{title}</Text>
            { 
                movies.length 
                ? 
                <ScrollView horizontal={true}>
                    {movies.map(movie => (
                        <Movie key={movie.id} movie={movie} navigation={navigation}/>
                    ))}
                </ScrollView> 
                : 
                <Text>Loading...</Text> 
            }
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        marginTop: 50,
        paddingRight: 10,
    },
    row__header: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginLeft: 10,
        marginBottom: 25,
        color: '#c29e17',
    },
});
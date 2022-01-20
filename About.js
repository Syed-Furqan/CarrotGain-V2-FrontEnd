import { View, Text, StyleSheet } from "react-native";

export default About = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: '#c29e17', fontSize: 25, fontWeight: 'bold', marginBottom: 15}}>About</Text>
            <Text style={{color: 'white', fontSize: 15}}>An Entertainment Database App which contains data for all the Entertainment
                  Genres(Movies, TV Series, Anime, Games) at one place. Search and find all the relevant information, cast, videos
                  about the genre you are looking for.
            </Text>
            <View style={{position: 'absolute', bottom: 50, left: 25}}>
                <Text style={{color: 'white', fontSize: 13}}>Developer Contact: </Text>
                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>syedfurqan2001@gmail.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        padding: 25,
        backgroundColor: 'black',
    }
});
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default Movie = ({movie, navigation}) => {
    const baseImageURL = 'https://image.tmdb.org/t/p/original';

    return (
        <View style={styles.movie}>
            <Image 
                source={{uri: `${baseImageURL}${movie.poster_path}`}}
                style={styles.movie__img}
            />
            <View style={styles.movie__content}>
                <View style={styles.movie__content_rating}>
                    <MaterialIcons name='star' color='#c29e17' size={18} />
                    <Text style={{color: '#c2bdbd', marginLeft: 5}}>{movie.vote_average}</Text>
                </View>
                <Text 
                    style={
                        {fontSize: 15, fontWeight: 'bold', color: 'white', height: 60, marginBottom: 5}
                    }
                >
                    {movie.title}
                </Text>
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    onPress={() => navigation.navigate('Details', {id: movie.id, name: movie.title})}
                >
                    <View style={styles.movie__content_btn}>
                        <Text style={{color: '#5799ef', fontWeight: 'bold'}}>More</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    movie: {
        backgroundColor: '#151515',
        height: 340,
        width: 160,
        marginLeft: 10,
        borderRadius: 2,
        elevation: 5,
    },
    movie__img: {
        width: '100%',
        height: 200,
        borderRadius: 2,
    },
    movie__content: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    movie__content_rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    movie__content_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 7,
        borderColor: '#545454',
        borderWidth: 1,
        borderRadius: 4,
    },
});
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import Row from '../../components/Movies/Row';

export default MovieHome = ({navigation}) => {

    const API_KEY = '8b5f46448783f704c3aac11d3c1e0695';
    const baseURL = 'https://api.themoviedb.org/3/movie';

    return (
        <ScrollView>
            <StatusBar backgroundColor='#090009' />
            <View style={styles.container}>
                <Row URL={`${baseURL}/now_playing?api_key=${API_KEY}&language=en-US`} title='Now Playing' navigation={navigation}/>
                <Row URL={`${baseURL}/popular?api_key=${API_KEY}&language=en-US`} title='Popular' navigation={navigation}/>
                <Row URL={`${baseURL}/top_rated?api_key=${API_KEY}&language=en-US`} title='Top Rated' navigation={navigation}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});
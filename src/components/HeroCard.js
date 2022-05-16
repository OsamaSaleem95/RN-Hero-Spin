import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default HeroCard = ({ data, onPress }) => {
    const handleOnPress = () => {
        onPress(data.name)
    }
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.9}
            onPress={handleOnPress}
        >
            <ImageBackground
                source={data.image}
                style={styles.image}
            >
                <LinearGradient
                    colors={['transparent', 'black']}
                    style={styles.linearGradient}
                    start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
                >
                    <Text style={styles.title}>{data.name}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    linearGradient: {
        height: 60,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    }
});

import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground,
    View,
    Animated,
    Easing,
    Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button';
import Theme from '../common/Theme';
import MovieCard from '../components/MovieCard';
import { getRandomMovieAction } from '../store/actions/MainActions';


export default Home = ({ navigation }) => {
    const dispatcher = useDispatch()
    const MainReducer = useSelector(state => state.MainReducer);
    const { currentMovie = {} } = MainReducer

    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isShowMode, setisShowMode] = useState(false)

    const onGetRandomPress = () => {
        dispatcher(
            getRandomMovieAction()
        )
    }

    const toggleShowModeAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: isShowMode ? 0 : 1,
            duration: 500,
            easing: Easing.out(Easing.circle),
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                setisShowMode(!isShowMode)
            }, 500);
        })
    }

    const buttonContAnimatedStyles = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, Dimensions.get('screen').height * 0.5 + 70],
                }),
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        }),
    }

    const buttonContAnimatedStyles2 = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                }),
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
    }

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={styles.container}
        >
            <MovieCard
                data={currentMovie}
                animatedValue={animatedValue}
            />
            <Animated.View style={[styles.buttonsContainer, buttonContAnimatedStyles]}>
                <Button
                    text='Get Random Movie'
                    color={'#fff'}
                    onPress={onGetRandomPress}
                    buttonStyles={styles.button}
                />
                <Button
                    text='Get Random Movie by Hero'
                    color={'#fff'}
                    onPress={toggleShowModeAnimation}
                    buttonStyles={styles.button}
                />
            </Animated.View>
            <Animated.View style={[styles.buttonsContainer2, buttonContAnimatedStyles2]}>
                <LinearGradient
                    colors={['transparent','black','black', 'black']}
                    style={styles.linearGradient}
                    start={{ x: 0.5, y:0 }}
                >
                    <Button
                        text='Back'
                        color={'#fff'}
                        onPress={toggleShowModeAnimation}
                        buttonStyles={styles.backButton}
                    />
                    <Button
                        text='Go Next'
                        color={'#fff'}
                        onPress={toggleShowModeAnimation}
                        buttonStyles={styles.button}
                    />
                </LinearGradient>
            </Animated.View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Theme.styles.mainContainers,
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0
    },
    buttonsContainer: {
        height: 140,
        position: 'absolute',
        width: '100%'
    },
    button: {
        marginVertical: 10
    },
    buttonsContainer2: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height:100
    },
    backButton: {
        width: 50,
        borderColor: 'transparent'
    },
    linearGradient: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground,
    View,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button';
import Theme from '../common/Theme';
import MovieCard from '../components/MovieCard';
import { getRandomMovieAction } from '../store/actions/MainActions';
import AppPicker from '../common/AppPicker'
import { superheroes } from '../helpers/constants';


export default Home = ({ navigation }) => {
    const dispatcher = useDispatch()
    const MainReducer = useSelector(state => state.MainReducer);
    const { currentMovie = {} } = MainReducer

    const animatedValue = useRef(new Animated.Value(0)).current;
    const [pickerVisible, setPickerVisible] = useState(false)
    const [selectedHero, setSelectedHero] = useState(null)



    const toggleShowModeAnimation = (flag) => {
        Animated.timing(animatedValue, {
            toValue: flag ? 1 : 0,
            duration: 500,
            easing: Easing.out(Easing.circle),
            useNativeDriver: true
        }).start()
    }
    const enableShowMode = () => {
        toggleShowModeAnimation(true)
    }
    const disableShowMode = () => {
        toggleShowModeAnimation(false)
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

    const logoAnimatedStyles = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-Dimensions.get('screen').height * 0.25, -Dimensions.get('screen').height * 0.50],
                }),
            }
        ]
    }
    const getRandom = () => {
        setSelectedHero('')
        dispatcher(
            getRandomMovieAction('', () => {
                enableShowMode()
            })
        )
    }

    const getRandomByHero = () => {
        dispatcher(
            getRandomMovieAction(selectedHero, () => {
                enableShowMode()
            })
        )
    }

    const onPickerCancel = () => {
        setPickerVisible(false)
    }

    const openPicker = () => {
        setPickerVisible(true)
    }

    const onPickerSubmit = () => {
        getRandomByHero()
        setPickerVisible(false)
    }

    const onGoNextPress = () => {
        if (!!selectedHero) getRandomByHero()
        else getRandom()
    }

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={styles.container}
        >
            <Animated.Text style={[styles.logo, logoAnimatedStyles]}>Hero Spin</Animated.Text>
            <MovieCard
                data={currentMovie}
                animatedValue={animatedValue}
            />
            <Animated.View style={[styles.buttonsContainer, buttonContAnimatedStyles]}>
                <Button
                    text='Get Random Movie'
                    color={'#fff'}
                    onPress={getRandom}
                    buttonStyles={styles.button}
                />
                <Button
                    text='Get Random Movie by Hero'
                    color={'#fff'}
                    onPress={openPicker}
                    buttonStyles={styles.button}
                />
            </Animated.View>
            <Animated.View style={[styles.buttonsContainer2, buttonContAnimatedStyles2]}>
                <LinearGradient
                    colors={['transparent', 'black', 'black', 'black']}
                    style={styles.linearGradient}
                    start={{ x: 0.5, y: 0 }}
                >
                    <Button
                        text='Back'
                        color={'#fff'}
                        onPress={disableShowMode}
                        buttonStyles={styles.backButton}
                    />
                    <Button
                        text='Go Next'
                        color={'#fff'}
                        onPress={onGoNextPress}
                        buttonStyles={styles.button}
                    />
                </LinearGradient>
            </Animated.View>
            <AppPicker
                data={superheroes}
                visible={pickerVisible}
                onCancel={onPickerCancel}
                onSubmit={onPickerSubmit}
                selected={selectedHero}
                setSelected={setSelectedHero}
            />
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
    logo: {
        color: '#fff',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold'
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
        height: 100
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

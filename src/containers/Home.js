import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    ImageBackground
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button';
import Theme from '../common/Theme';
import { getRandomMovieAction } from '../store/actions/MainActions';

export default Home = ({ navigation }) => {
    const dispatcher = useDispatch()
    const MainReducer = useSelector(state => state.MainReducer);
    const { currentMovie = {} } = MainReducer

    const onGetRandomPress = () => {
        dispatcher(
            getRandomMovieAction()
        )
    }

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={styles.container}
        >
            <Button
                text='Get Random Movie'
                color={'#fff'}
                onPress={onGetRandomPress}
            />
            <Text>{currentMovie.Title}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Theme.styles.mainContainers,
    },
});

import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';
import { useDispatch } from 'react-redux';
import Theme from '../common/Theme';
import { searchMovieAction } from '../store/actions/MainActions';

export default Home = ({ navigation }) => {

    const dispatcher = useDispatch()
    useEffect(() => {
        dispatcher(searchMovieAction())
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text>osama</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Theme.styles.mainContainers
    },
});

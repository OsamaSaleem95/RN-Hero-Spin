import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';
import Theme from '../common/Theme';

export default Home = ({ navigation }) => {

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

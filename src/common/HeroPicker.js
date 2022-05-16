import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    Easing
} from 'react-native'
import HeroCard from '../components/HeroCard';

export default HeroPicker = ({ data, onCancel, onSubmit, visible, }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const handleOnSubmit = (selected) => {
        onSubmit(selected)
    }

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: visible ? 1 : 0,
            duration: 500,
            easing: Easing.out(Easing.circle),
            useNativeDriver: true
        }).start()
    }, [visible])

    const contAnimatedStyles = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [Dimensions.get('screen').height, 0],
                }),
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
    }

    return (
            <Animated.ScrollView style={[styles.container,contAnimatedStyles]}>
                {data.map(item => {
                    return (
                        <HeroCard
                            key={item.name}
                            data={item}
                            onPress={handleOnSubmit}
                        />
                    )
                })
                }
            </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: Dimensions.get('screen').height,
        width: '100%',
        backgroundColor: '#000',
        alignSelf: 'center',
        bottom: 0,
        paddingTop: 44
    },
})
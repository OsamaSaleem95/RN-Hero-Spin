import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    ScrollView
} from 'react-native';
import Button from '../common/Button';
import Theme from '../common/Theme';


export default MovieCard = ({ data, animatedValue }) => {
    const animatedStyles = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                }),
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
    }
    return (
        <Animated.View
            style={[styles.container, animatedStyles]}
        >
            <Image style={styles.poster} source={{ uri: data.Poster }} />
            <View style={styles.details}>
                <Text style={styles.title}>{data.Title}</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.info}>{data.Year}</Text>
                    <Text style={styles.info}> - </Text>
                    <Text style={styles.info}>{data.Type}</Text>
                </View>

                <ScrollView style={styles.descriptionScroll}>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper enim odio, eget mattis metus tincidunt eget. Aenean interdum malesuada metus, ut tristique nibh tempus vitae. Pellentesque bibendum bibendum est at lacinia. Fusce nec risus ut lectus suscipit commodo. Proin eget laoreet orci, vel vehicula metus. Donec semper, orci consequat vestibulum dignissim, nulla leo tincidunt nulla, placerat hendrerit ipsum lacus a metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ac convallis mi. Donec suscipit leo dolor, a molestie eros interdum quis. Aenean dictum tempus sodales. Morbi pellentesque vestibulum massa, vitae tincidunt nulla semper sed.</Text>
                </ScrollView>


            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    poster: {
        width: '100%',
        height: '50%'
    },
    details: {
        height: '50%',
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    info: {
        fontSize: 12,
        color: '#ccc',

    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 10
    },
    description: {
        color: '#fff',
        fontSize: 16,
    },
    descriptionScroll: {
        flex: 1
    }
});

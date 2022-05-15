import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Dimensions
} from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default AppPicker = ({ data, onCancel, onSubmit, visible, selected, setSelected }) => {

    const handleOnSubmit = () => {
        onSubmit(selected)
    }
    if (visible)
        return (
            <View style={styles.container}>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        onPress={onCancel}
                    >
                        <Text style={styles.submitText}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleOnSubmit}
                    >
                        <Text style={styles.submitText}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>

                <Picker
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelected(itemValue)
                    }
                    style={styles.picker}
                >
                    <Picker.Item key={null} label={''} value={null} />
                    {
                        data.map(item => {
                            return (<Picker.Item key={item} label={item} value={item} />)
                        })
                    }
                </Picker>
            </View>
        )
    return null
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: Dimensions.get('screen').height * 0.30,
        width: '100%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        bottom: 0
    },
    picker: {
        height: '100%',
        justifyContent: 'center',
    },
    buttonsRow: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    submitButton: {
        alignSelf: 'flex-end'
    },
    submitText: {
        color: 'rgb(0,122,255)'
    },
})
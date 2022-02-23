import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import {COLORS} from '../constants/Colors';

const NewPlaceScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nueva Direccion</Text>
            <TextInput style={styles.input}/>
            <Button title='Guardar direccion' color={COLORS.MAROOM} onPress={()=>{}}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:30,
        marginVertical:15
    },
    label:{
        fontSize:18,
        marginVertical:8,
        color:'black'

    },
    input:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginVertical:8,
        padding:4
    }
})

export default NewPlaceScreen

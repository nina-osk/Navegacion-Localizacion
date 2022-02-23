import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import {COLORS} from '../constants/Colors';
import { addPlace } from '../store/places.actions';
import ImageSelector from '../components/imageselector';
import LocationSelector from '../components/locationSelector';

const NewPlaceScreen = () => {

    const dispatch=useDispatch()
    const [title,setTitle]=useState('');
    const [image,setImage]=useState('');
    const [location, setLocation]=useState('');

    const handleTitleChange=(text)=> setTitle(text)
    //Boton 
    const handleSave=()=>{
        dispatch(addPlace(title,image))
        navigation.navigate('Direcciones')
    };

    const handleOnImage = (uri) =>{
        setImage(uri)
    }
    const handleOnLocation = (position) =>{
        setImage(position)
    }
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.label}>Titulo</Text>
            <ImageSelector onImage={handleOnImage}></ImageSelector>
            <LocationSelector></LocationSelector>
            <TextInput style={styles.input} 
            onChangeText={handleTitleChange}
            value={title}/>
            <Button title='Guardar direccion' color={COLORS.MAROON} onPress={()=>handleSave()}></Button>
        </View>
        </ScrollView>
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

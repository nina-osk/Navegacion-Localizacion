import React from 'react';
import {UseState} from 'react';
import {View, StyleSheet,Button,Platform } from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import { PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {COLORS} from '../../constants/Colors' 

const ImageSelector=({onImage})=>{
    const[pickerResponse,setPickerResponse]=useState();


    //Validar IOS
    const IS_IOS = Platform.OS=== 'ios';

    const handleTakePicture = async ()=>{
    const options ={
        selectionLimit:1,
        mediaType:'photo',
        includeBase64: false,
    }

    let granted;
    if(IS_IOS){
        granted = await request(PERMISSIONS.IOS.CAMERA)
    } else {
        granted = await request(PERMISSIONS.ANDROID.CAMERA)
    }

    if(granted===RESULTS.GRANTED){
        launchCamera(options, (res)=>{
            if(!res.didCancel && !res.error){
                setPickerResponse(res.assets[0]);
                onImage && onImage(res.asset[0].uri);
            }
        })
    } else{
        console.warn('Permission denied')
    }
    };
    return(
        <View style={styles.container}>
        <View style={styles.preview}>
            {!pickerResponse ? (<Text>No hay imagen seleccionada</Text>):(
                <Image style={styles.image} source={{ uri:pickerResponse}}></Image>)
            }
        </View>
        <Button title="Tomar foto" color={COLORS.MAROON} onPress={() =>handleTakePicture() }></Button>
        </View>
        )}

        const styles = StyleSheet.create({
            container:{
                flex:1,
                aligItems:'center',
                justifyContent:'center',
            },
            preview:{
                width:'100%',
                height:200,
                marginBottom:10,
                justifyContent:'center',
                alignContent: 'center',
                borderColor: COLORS.BLUSH,
                borderWidth:1,
            },
            image:{
                width:'100%',
                height: '100%'
            }
        })

    export default ImageSelector;
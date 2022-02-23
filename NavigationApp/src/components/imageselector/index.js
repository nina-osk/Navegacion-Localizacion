import React from 'react';
import {UseState} from 'react';
import {View, StyleSheet,Button,PermissionsAndroid} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {COLORS} from '../../constants/Colors' 

const ImageSelector=(props)=>{
    const[pickedUri,setPickedUri]=useState();
    
    const verifyPermission = async ()=>{
        try{
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,{
                    title: 'CAMERA EXMPLE APP Camera Permisison',
                    message: 'Need access to your camera',
                    buttonNeutral: 'Ask me later',
                    buttonNegative:'Cancel',
                    buttonPositive:'Ok',
                } );
            if(granted=== PermissionsAndroid.RESULTS.GRANTED){
                return true;}
                else{
               return false; }
        }
         catch(e){ console.warn(e); }
    };
 

    const handleTakeImage = async ()=>{
     const isCameraOk = await verifyPermission();
     if (!isCameraOk) return;
     let options = {
         storageOptions:{
             skipBackup: true,
             path:'images',
         },
     };

    ImagePicker.launchCamera(options,(response)=>{
             setPickedUri(response.assets[0].uri)
         })

    };
    return(
        <View style={styles.container}>
        <View style={styles.preview}>
            {!pickedUri ? (<Text>No hay imagen seleccionada</Text>):(
                <Image style={styles.image} source={{ uri:pickedUri}}></Image>)
            }
        </View>
        <Button title="Tomar foto" color={COLORS.MAROON} onPress={() =>handleTakeImage() }></Button>
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
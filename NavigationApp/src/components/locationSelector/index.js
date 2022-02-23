import React from "react";
import {Button, View} from 'react-native';
import {COLORS} from '../../constants/Colors';

const LocationSelector =({onLocation})=>{
    const [pickedLocation, setpickedLocation]=useState({
        latitude:0,
        longitude:0,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
    });

    const handleGetLocation=()=>{
        Geolocation.getCurrentPosition(
            position=>{
                console.warn(position);
                setpickedLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                })
                onLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                })
            },
            error=>{
                console.warn(error);
                Alert.alert(
                    'Couldn not fetch location',
                    'Please enable location services and try again',
                    [{text:'ok'}]
                )
            },
            {
                enabledHighAccuracy:true,
                timeout:15000,
                maximunAge: 10000,
                forcedRequestLocation: true, 
                showLocationDialog:true,
            }
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {
                    pickedLocation ?
                    <Text>{pickedLocation.lat},{pickedLocation.lng}</Text>:
                    <Text>No hay ubicacion seleccionada</Text>
                }
            </View>
            <Button>
                title:"Seleccionar ubicacion"
                color:{COLORS.BLUSH}
                onPress={handleGetLocation}
            </Button>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
    },
    preview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignContent:'center',
        borderColor:COLORS.BLUSH,
        borderWidth:1
    }
})

export default LocationSelector;
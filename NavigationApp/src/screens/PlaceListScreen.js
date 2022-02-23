import React from 'react'
import {FlatList} from 'react-native'
import { NativeScreenNavigationContainer } from 'react-native-screens';
import {useSelector} from 'react-redux';
import PlaceItem from '../components/PlaceItem'

const PlaceListScreen = ({navigate}) => {
    const places= useSelector(state=>state.places.places);
     
    const onSelectDetail =()=>{
        navigation.navigate('Detalle')
    }
    const renderItem =({item})=>{
        <PlaceItem>
            title={item.title}
            Image={item.image}
            address='123 street, city, country'
            onSelect={onSelectDetail}
        </PlaceItem>
   
    }



    return (
        <FlatList>
            data={places}
            keyExtractor={item.id}
            renderItem={renderItem}
        </FlatList>
    )
}

export default PlaceListScreen

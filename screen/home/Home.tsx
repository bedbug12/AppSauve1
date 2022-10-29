import React, { ReactText, useState } from "react"
import { View, Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { HeaderHome } from "../../component/header-home/HeaderHome"
import { ProductItem } from '../../component/product/product-home/ProductItem';
import { DataProduct } from '../../data/data-product/DataProduct';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductView } from "../product/ProductView";
import { useNavigation } from '@react-navigation/native';

const stack = createNativeStackNavigator();

export const Home = () =>{

   

    return (
        <View style={{}}>
            <HeaderHome />
           
            <View style={{padding:1,alignSelf:"center"}}>
                <FlatList contentContainerStyle={{paddingBottom:200}}
                    numColumns={2}
                    data={DataProduct}
                    renderItem={({item}) =>{
                        return <ProductItem  image={item.image} title={item.title} seller={item.seller} price={item.price}/>
                    }}
                    keyExtractor={item => item.id}
                    />
             </View>
            
             
            
        </View>
            
    )
}
import React from "react"
import { View , Text, SafeAreaView, FlatList} from "react-native"
import { Header } from "../../component/header/Header"
import { ProductItem } from "../../component/product/product-home/ProductItem"
import { DataProduct } from "../../data/data-product/DataProduct"

export const Search = () =>{
    return (
        <View>
            <Header />
            <View style={{padding:2,alignSelf:"center"}}>
                <FlatList 
                contentContainerStyle={{paddingBottom:300}}
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
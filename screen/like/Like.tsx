import React from "react"
import { View , FlatList,} from "react-native"
import { ProductItem } from '../../component/product/product-home/ProductItem';
import { DataProduct } from '../../data/data-product/DataProduct';
export const Like = () =>{
    return (
        <View>
            <View style={{padding:1,alignSelf:"center"}}>
                <FlatList 
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
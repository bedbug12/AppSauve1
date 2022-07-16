import React from "react"
import { View , Text} from "react-native"
import { HeaderHome } from "../../component/header-home/HeaderHome"
import { NavigationContainer } from "@react-navigation/native"
import { RouteNav } from '../../navigation/router/RouteNav';
export const Home = () =>{
    return (
            <HeaderHome />
    )
}
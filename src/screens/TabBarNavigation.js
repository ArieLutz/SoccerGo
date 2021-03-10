import React from "react";
import { NavigationContainer } from '@react-navigation/native';


import TabsHomeScreem from "./TabsHomeScreem";
import HeaderP from "../shared/HeaderP";



const TabBarNavigation = () => {

    return(
        <NavigationContainer>
            <HeaderP/>
            <TabsHomeScreem/>
        </NavigationContainer>
    )
}

export default TabBarNavigation;
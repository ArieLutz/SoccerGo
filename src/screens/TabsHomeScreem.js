import  React from "react";



//Pantallas
import TodayScreem from "./TodayScreem";
import MatchesScreem from   "./MatchesScreem";
import ClassificationsScreem from "./ClassificationsScreem";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();



const TabsHomeScreem = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="TodayScreem"
            tabBarOptions={{
                activeTintColor: "#ffff",
                labelsStyle: { fontSize: 12 },
                style: { backgroundColor: '#182126', marginTop: insets.top }
            }}
        >

            <Tab.Screen
                name="Today"
                component={TodayScreem}
                options={{ tabBarLabel: 'Today' }}
            />

            <Tab.Screen
                name="Matches"
                component={MatchesScreem}
                options={{ tabBarLabel: 'Matches' }}
            />

            <Tab.Screen
                name="ClassificationsScreem"
                component={ClassificationsScreem}
                options={{ tabBarLabel: 'Classifications' }}
            />

        </Tab.Navigator>
    );

}


export default TabsHomeScreem;


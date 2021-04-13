import  React from "react";



//Pantallas
import TodayScreem from "./TodayScreem";
import MatchesScreem from   "./MatchesScreem";
//import ClassificationsScreem from "./ClassificationsScreem";
import CommentScreem from "./CommentsScreem";
import MyComment from "./MyComment";

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
                style: { backgroundColor: '#182126' }
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
                name="CommentScreem"
                component={CommentScreem}
                options={{ tabBarLabel: 'Coments' }}
            />
            <Tab.Screen
                name="MyComment"
                component={MyComment}
                options={{ tabBarLabel: 'My Comment' }}
            />

        </Tab.Navigator>
    );

}


export default TabsHomeScreem;


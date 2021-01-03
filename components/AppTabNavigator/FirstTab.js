import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { SearchBar } from 'react-native-elements';   // 검색바 관련 모듈


const FirstStack = createStackNavigator();
function FirstStackNavigator() {
    return (
        <FirstStack.Navigator>
            <FirstStack.Screen name="First" component={FirstScreen} />
            <FirstStack.Screen name="Details" component={DetailsScreen} />
        </FirstStack.Navigator>
    );
}



function FirstScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>First screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default FirstStackNavigator;
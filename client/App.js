import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import BuyCar from './Screens/BuyCar';
import SellCar from './Screens/SellCar';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				// screenOptions={{
				// 	headerShown: false,
				// }}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused }) => {
						let iconName;
						let color;
						if (route.name === 'BuyCar') {
							iconName = 'car';
							color = focused ? 'black' : 'grey';
						} else if (route.name === 'SellCar') {
							iconName = 'dollar';
							color = focused ? 'black' : 'grey';
						}

						return <FontAwesome name={iconName} size={24} color={color} />;
					},
					headerShown: false,
					tabBarActiveTintColor: 'black',
					tabBarInactiveTintColor: 'gray',
				})}
			>
				<Tab.Screen
					name='BuyCar'
					component={BuyCar}
					options={{ title: 'Buy Car' }}
				/>
				<Tab.Screen
					name='SellCar'
					component={SellCar}
					options={{ title: 'Sell Car' }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

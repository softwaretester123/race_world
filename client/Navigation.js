import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import BuyCar from './Screens/BuyCar';
import Finance from './Screens/Finance';

const Tab = createBottomTabNavigator();

export default function Navigation({ navigation, route }) {
	return (
		<Tab.Navigator initialRouteName='BuyCar'
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
					} else if (route.name === 'Finance') {
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
				name='Finance'
				component={Finance}
				options={{ title: 'Finance' }}
			/>
		</Tab.Navigator>
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

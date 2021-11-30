import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewCar from './BuyCarSubScreens/NewCar';
import UsedCar from './BuyCarSubScreens/UsedCar';
import ViewNewCar from './ViewNewCar'

import NewCarImage from '../assets/icons/Asset2.png';
import OldCarImage from '../assets/icons/Asset1.png';

const BuyCar = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{ ...styles.box, backgroundColor: '#A83AFB' }}
				onPress={() => navigation.navigate('NewCar')}
			>
				<Text style={styles.boxText}>New Car</Text>
				<Image source={NewCarImage} style={styles.boxImage} />
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.box, backgroundColor: '#F15D1B' }}
				onPress={() => navigation.navigate('UsedCar')}
			>
				<Text style={styles.boxText}>Used Car</Text>
				<Image source={OldCarImage} style={styles.boxImage} />
			</TouchableOpacity>
		</View>
	);
};

const Stack = createNativeStackNavigator();

const BuyCarNavigator = () => {
	return (
		<Stack.Navigator
			// screenOptions={{
			// 	headerShown: false,
			// }}
		>
			<Stack.Screen name='BuyCarHome' component={BuyCar} options={{title: 'Buy Car'}} />
			<Stack.Screen
				name='NewCar'
				component={NewCar}
				options={{ title: 'New Car' }}
			/>
			<Stack.Screen name='UsedCar' component={UsedCar} options={{ title: 'Used Car' }} />
			<Stack.Screen name="ViewNewCar" component={ViewNewCar} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flexWrap: 'wrap',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	box: {
		borderWidth: 2,
		height: 150,
		width: 350,
		margin: 20,
		borderRadius: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	boxText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		marginTop: 10,
	},
	boxImage: {
		height: 100,
		width: 100,
		resizeMode: 'contain',
	},
});

export default BuyCarNavigator;

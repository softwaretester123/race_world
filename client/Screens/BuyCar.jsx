import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Button,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewCar from './BuyCarSubScreens/NewCar';
import LoanCalculator from './BuyCarSubScreens/LoanCalculator';
import ViewNewCar from './ViewNewCar';
import Profile from './Profile';
import NewCarImage from '../assets/icons/Asset2.png';
import OldCarImage from '../assets/icons/Asset1.png';

const BuyCar = ({ navigation, route }) => {


	return (
		<View style={styles.container}>
			<TouchableOpacity style={{
				backgroundColor: '#0099E5',
				marginTop: 20,
				marginLeft: 260,
				padding: 15,
				borderRadius: 10,
			}}
			onPress={() => navigation.navigate('Profile', { user: route.params.user })}
			>
				<Text style={{fontSize: 16}}>Edit Profile</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.box, backgroundColor: '#A83AFB' }}
				onPress={() => navigation.navigate('NewCar')}
			>
				<Text style={styles.boxText}>New Car</Text>
				<Image source={NewCarImage} style={styles.boxImage} />
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.box, backgroundColor: '#F15D1B' }}
				onPress={() => navigation.navigate('LoanCalculator')}
			>
				<Text style={styles.boxText}>Loan Calculator</Text>
				<Image source={OldCarImage} style={styles.boxImage} />
			</TouchableOpacity>
		</View>
	);
};

const Stack = createNativeStackNavigator();

const BuyCarNavigator = ({ route }) => {
	return (
		<Stack.Navigator
		// screenOptions={{
		// 	headerShown: false,
		// }}
		>
			<Stack.Screen
				name='BuyCarHome'
				component={BuyCar}
				options={({ route }) => ({ title: `Welcome ${route.params.user.name}` })}
			/>
			<Stack.Screen
				name='NewCar'
				component={NewCar}
				options={{ title: 'New Car' }}
			/>
			<Stack.Screen
				name='LoanCalculator'
				component={LoanCalculator}
				options={{ title: 'Loan Calculator' }}
			/>
			<Stack.Screen
			name="Profile"
			component={Profile}
			options={{ title: 'Profile' }} />

			<Stack.Screen name='ViewNewCar' component={ViewNewCar} />
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

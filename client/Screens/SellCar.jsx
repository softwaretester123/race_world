import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SellCar = ({navigation}) => {
	return (
		<View>
			<Text style={styles.heading}>Sell Car</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

const Stack = createNativeStackNavigator();

const SellCarNavigator = () => {
	return (
		<Stack.Navigator
		>
			<Stack.Screen name='SellCarHome' component={SellCar} options={{title: 'Sell Car'}} />
			{/* <Stack.Screen
				name='NewCar'
				component={NewCar}
				options={{ title: 'New Car' }}
			/>
			<Stack.Screen name='UsedCar' component={UsedCar} options={{ title: 'Used Car' }} /> */}
		</Stack.Navigator>
	);
}

export default SellCarNavigator;
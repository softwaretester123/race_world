import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Finance = ({navigation}) => {
	return (
		<View>
			<Text style={styles.heading}>Finance</Text>
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

const FinanceNavigator = () => {
	return (
		<Stack.Navigator
		>
			<Stack.Screen name='FinanceHome' component={Finance} options={{title: 'Finance'}} />
			{/* <Stack.Screen
				name='NewCar'
				component={NewCar}
				options={{ title: 'New Car' }}
			/>
			<Stack.Screen name='UsedCar' component={UsedCar} options={{ title: 'Used Car' }} /> */}
		</Stack.Navigator>
	);
}

export default FinanceNavigator;
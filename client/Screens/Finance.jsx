import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import finance_list from '../FinanceList';

const Finance = ({ navigation }) => {
	const [selectedValue, setSelectedValue] = useState('java');
	const [contact, setContact] = useState('');

	useEffect(() => {}, [contact]);

	return (
		<View>
			<Text style={styles.heading}>Finance</Text>
			<Picker
				selectedValue={selectedValue}
				style={{ height: 100, width: 220 }}
				onValueChange={(itemValue, itemIndex) => {
					setSelectedValue(itemValue);
					setContact(itemValue);
				}}
			>
				{finance_list.map((finance, index) => (
					<Picker.Item
						key={finance.id}
						label={finance.name}
						value={finance.contact}
					/>
				))}
			</Picker>
			<Text>{contact}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

const Stack = createNativeStackNavigator();

const FinanceNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='FinanceHome'
				component={Finance}
				options={{ title: 'Finance' }}
			/>
		</Stack.Navigator>
	);
};

export default FinanceNavigator;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import odometer from '../../assets/images/icons8_odometer_50px_1.png';
import engine from '../../assets/images/icons8_engine_50px.png'
import bhp from '../../assets/images/icons8_lightning_bolt_26px.png'
import transmission from '../../assets/images/icons8_gearbox_16px.png'

const NewCar = ({ car, navigation }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('ViewNewCar', {car: car.item}) }}>
			<Text style={styles.name}>{car.item.name}</Text>
			<View>
				<Image style={styles.image} source={{ uri: car.item.image }} />
			</View>
			<View style={styles.info}>
				<View style={styles.infoItem}>
					<Text style={styles.infoItemText}>Mileage</Text>
					<Image style={styles.smallIcon} source={odometer} />
					<Text style={styles.infoItemText}>{car.item.specs.mileage} Kmpl</Text>
				</View>
                <View style={styles.infoItem}>
					<Text style={styles.infoItemText}>Engine</Text>
					<Image style={styles.smallIcon} source={engine} />
					<Text style={styles.infoItemText}>{car.item.specs.engine} CC</Text>
				</View>
                <View style={styles.infoItem}>
					<Text style={styles.infoItemText}>BHP</Text>
					<Image style={styles.smallIcon} source={bhp} />
					<Text style={styles.infoItemText}>{car.item.specs.bhp}</Text>
				</View>
                <View style={styles.infoItem}>
					<Text style={styles.infoItemText}>Transmission</Text>
					<Image style={styles.smallIcon} source={transmission} />
					<Text style={styles.infoItemText}>{car.item.specs.transmission}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default NewCar;

const styles = StyleSheet.create({
	container: {
		margin: 20,
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 15,
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	image: {
		borderRadius: 10,
		height: 200,
		width: 312,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
		backgroundColor: '#aaa',
		padding: 10,
		borderRadius: 10,
	},
	infoItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	infoItemText: {
		fontSize: 12,
		color: '#eee',
	},
	smallIcon: {
		width: 30,
		height: 30,
	},
});

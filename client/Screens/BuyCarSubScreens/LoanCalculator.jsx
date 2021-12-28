import React, { useEffect, useState } from 'react';
import { View, Text, Picker, TouchableOpacity, StyleSheet } from 'react-native';
import { Slider, Icon } from 'react-native-elements';

import cars_list from '../../CarsList';

const NewCar = ({ navigation }) => {
	const [selectedValue, setSelectedValue] = useState('java');
	const [sliderValue, setSliderValue] = useState(0);

	const [amount, setAmount] = useState(0);

	const [price, setPrice] = useState(0);

	const handleOnSelect = () => {};

	useEffect(() => {}, [price]);

	useEffect(() => {
		if (sliderValue === 0) {
			setAmount(price);
		} else {
			setAmount(price / (12 * sliderValue));
		}
	}, [sliderValue]);

	const interpolate = (start, end) => {
		let k = (sliderValue - 0) / 10; // 0 =>min  && 10 => MAX
		return Math.ceil((1 - k) * start + k * end) % 256;
	};

	const color = () => {
		let r = interpolate(255, 0);
		let g = interpolate(0, 255);
		let b = interpolate(0, 0);
		return `rgb(${r},${g},${b})`;
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={{ fontSize: 24 }}>Loan Calculator</Text>
				<Picker
					selectedValue={selectedValue}
					style={{ height: 100, width: 220 }}
					onValueChange={(itemValue, itemIndex) => {
						setSelectedValue(itemValue);
						setPrice(itemValue);
					}}
				>
					{cars_list.map((car, index) => (
						<Picker.Item
							key={car.id}
							label={car.name}
							value={car.price}
						/>
					))}
				</Picker>
			</View>
			<View>
				<Text>Price of the Vehicle {price}</Text>
				<View>
					<Slider
						value={sliderValue}
						onValueChange={setSliderValue}
						maximumValue={10}
						minimumValue={0}
						step={1}
						allowTouchTrack
						trackStyle={{
							height: 5,
							backgroundColor: 'transparent',
						}}
						thumbStyle={{
							height: 20,
							width: 20,
							backgroundColor: 'transparent',
						}}
						thumbProps={{
							children: (
								<Icon
									name='car'
									type='font-awesome'
									size={20}
									reverse
									containerStyle={{ bottom: 20, right: 20 }}
									color={color()}
								/>
							),
						}}
					/>
					<Text style={{ paddingTop: 20 }}>Years: {sliderValue}</Text>
					<Text>
						Pay Rs.{amount.toFixed(1)} EMI per month for{' '}
						{sliderValue * 12} months
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: 'center',
	},
});

export default NewCar;

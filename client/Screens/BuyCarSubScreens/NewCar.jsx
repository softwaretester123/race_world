import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from 'react-native';

import NewCarComponent from '../../Components/NewCar';

import cars_list from '../../CarsList'

const NewCar = ({ navigation }) => {
	return (
		<View>
			<View>
				<FlatList
					data={cars_list}
					renderItem={(item, index) => (
						<NewCarComponent car={item} navigation={navigation} />
					)}
					keyExtractor={(item, index) => index.toString()}
					style={{ width: '100%' }}
					ListFooterComponent={<View style={{ height: 100 }} />}
				/>
			</View>
		</View>
	);
};

export default NewCar;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

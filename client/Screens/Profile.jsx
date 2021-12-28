import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ToastAndroid,
	ScrollView,
	Alert,
} from 'react-native';

import LoginStyles from './LoginStyles';

import { useMutation, gql } from '@apollo/client';

const UPDATE_USER_MUTATION = gql`
	mutation UpdateUser(
		$id: String!
		$email: String!
		$name: String!
		$contact: String!
		$address: String!
	) {
		updateUser(
			id: $id
			email: $email
			name: $name
			contact: $contact
			address: $address
		) {
			id
			name
			email
			contact
		}
	}
`;

const Profile = ({ navigation, route }) => {
	const user = route.params.user;

	const [update, { data, loading, error }] =
		useMutation(UPDATE_USER_MUTATION);

	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [contact, setContact] = useState(user.contact);
	const [address, setAddress] = useState(user.address);

	useEffect(() => {
		if (error) {
			Alert.alert(error.message);
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			ToastAndroid.show('Update Successful!', ToastAndroid.SHORT);
		}
	}, [data]);


	const handleUpdate = async () => {
		try {
			console.log(name, email, contact, address);
			await update({
				variables: {
                    id: user.id,
					name,
					email,
					contact,
					address,
				},
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<View style={LoginStyles.container}>
			<ScrollView>
				<View style={{ ...LoginStyles.main, ...LoginStyles.sign_in }}>
					<View
						style={{
							...LoginStyles.card,
							...LoginStyles.shadowProp,
							height: 550,
							paddingHorizontal: 10,
						}}
					>
						<View style={{ ...LoginStyles.card_body, top: 5 }}>
							<View style={LoginStyles.form_group}>
								<Text style={LoginStyles.form_label}>Name</Text>
								<TextInput
									style={LoginStyles.form_control}
									value={name}
									onChangeText={setName}
								/>
							</View>

							<View style={LoginStyles.form_group}>
								<Text style={LoginStyles.form_label}>
									Email
								</Text>
								<TextInput
									style={LoginStyles.form_control}
									value={email}
									onChangeText={setEmail}
								/>
							</View>

							<View style={LoginStyles.form_group}>
								<Text style={LoginStyles.form_label}>
									Contact
								</Text>
								<TextInput
									style={LoginStyles.form_control}
									value={contact}
									onChangeText={setContact}
								/>
							</View>

							<View style={LoginStyles.form_group}>
								<Text style={LoginStyles.form_label}>
									Address
								</Text>
								<TextInput
									style={LoginStyles.form_control}
									value={address}
									onChangeText={setAddress}
								/>
							</View>

							<View style={LoginStyles.form_group}>
								<TouchableOpacity
									style={{
										...LoginStyles.btn,
										marginTop: 10,
									}}
									onPress={handleUpdate}
								>
									<Text style={LoginStyles.btn_text}>
										Update
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Profile;

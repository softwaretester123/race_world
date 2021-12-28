import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Alert
} from 'react-native';
import { useMutation, gql } from '@apollo/client';

import LoginStyles from './LoginStyles';

const SIGN_UP_MUTATION = gql`
	mutation signUp(
		$name: String!
		$email: String!
		$password: String!
		$contact: String!
		$address: String!
	) {
		signUp(
			name: $name
			email: $email
			password: $password
			contact: $contact
			address: $address
		) {
			token
			user {
				id
				name
				email
				contact
				address
			}
		}
	}
`;

const SignUpScreen = ({ navigation }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [contact, setContact] = useState('');
	const [address, setAddress] = useState('');

	const [signUp, { data, loading, error }] = useMutation(SIGN_UP_MUTATION);

	const handleSignUp = async () => {
		try {
			console.log(name, email, password, contact, address);
			await signUp({
				variables: {
					name,
					email,
					password,
					contact,
					address,
				},
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSignIn = async () => {
		navigation.navigate('Login');
	};

	useEffect(() => {
		if (error) {
			Alert.alert(error.message);
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			navigation.navigate('Home', {
				screen: 'BuyCar',
				params: {
					screen: 'BuyCarHome',
					params: { user: data.signUp.user },
				},
			});
		}
	}, [data]);

	return (
		<View style={LoginStyles.container}>
			<ScrollView>
				<View style={{ ...LoginStyles.main, ...LoginStyles.sign_in }}>
					<View
						style={{
							...LoginStyles.card,
							...LoginStyles.shadowProp,
							height: 630,
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
									Password
								</Text>
								<TextInput
									style={LoginStyles.form_control}
									secureTextEntry
									value={password}
									onChangeText={setPassword}
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
									onPress={handleSignUp}
								>
									<Text style={LoginStyles.btn_text}>
										Sign Up
									</Text>
								</TouchableOpacity>
							</View>

							<View style={LoginStyles.form_group}>
								<TouchableOpacity
									style={LoginStyles.btn_2}
									onPress={handleSignIn}
								>
									<Text style={LoginStyles.btn_2_text}>
										Sign In to your Account
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

export default SignUpScreen;

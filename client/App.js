import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import Navigation from './Navigation';

import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Login'
						component={SignInScreen}
						options={{ title: 'Login' }}
					/>
					<Stack.Screen
						name='Register'
						component={SignUpScreen}
						options={{ title: 'Register' }}
					/>
					<Stack.Screen
						name='Home'
						component={Navigation}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ApolloProvider>
	);
};

export default App;

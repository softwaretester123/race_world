import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		backgroundColor: '#0099E5',
	},
	main: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	sign_in: {},
	card: {
		borderRadius: 5,
		backgroundColor: '#fff',
		width: 340,
		height: 500,
		paddingHorizontal: 32,
		paddingVertical: 16,
		display: 'flex',
		alignItems: 'center',
	},
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,
		elevation: 18,
	},
	logo: {
		top: -60,
		width: 110,
		height: 110,
		borderWidth: 5,
		borderRadius: 100,
	},
	card_head: {},
	card_body: {
		top: -50,
	},
	header: {},
	form_group: {
		marginBottom: 20,
	},
	form_label: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	form_control: {
		fontSize: 18,
		color: '#282828',
		borderRadius: 3,
		borderWidth: 1,
		width: 250,
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	btn: {
		marginTop: 35,
		backgroundColor: '#FF4C4C',
		padding: 20,
		borderRadius: 3,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	btn_text: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 18,
	},

	btn_2: {
		marginTop: 15,
	},
	btn_2_text: {
		fontSize: 16,
		textAlign: 'center',
		color: '#FF4C4C',
	},
});

export default LoginStyles;
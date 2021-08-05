import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bg_image: {
		width: 275,
		height: 550,
		backgroundColor: 'transparent',
		position: 'absolute',
		right: -110,
		top: 145,
		borderRadius: 20,
		overflow: 'hidden'
	},

	bg_solid: {
		width: 275,
		height: 475,
		backgroundColor: '#a9e9fc',
		position: 'absolute',
		right: -60,
		top: 100,
		borderRadius: 20
	},
	body: {
		flex: 0.6,
		justifyContent: 'center',
		alignItems: 'center'
	},

	button: {
		borderRadius: 5,
		width: 275,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: {
			width: 0,
			height: 8
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,
		elevation: 17,
		marginBottom: 15
	},

	button_icon_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative'
	},

	button_icon: {
		position: 'absolute',
		top: 14
	},

	button_text: {
		textAlign: 'center',
		color: 'white',
		fontFamily: 'ApercuMonoPro-Bold',
		fontSize: 16,
		textTransform: 'uppercase'
	},

	carousel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	carousel_renderItem: {
		backgroundColor: 'white',
		borderRadius: 5,
		width: 275,
		height: 350,
		padding: 25,
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'center',
		alignItems: 'center'
	},

	carousel_renderItem_image: {
		width: 200,
		height: 300
	},

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f2fafc'
	},

	forgot_button: {
		position: 'absolute',
		top: 15,
		right: 10
	},

	forgot_text: {
		fontSize: 15,
		fontFamily: 'Lato_900Black',
		color: '#aaaeb3',
		letterSpacing: 0.3
	},

	header: {
		flex: 0.15,
		justifyContent: 'center',
		alignItems: 'center'
	},

	header_text: {
		fontSize: 30,
		textAlign: 'center',
		fontFamily: 'ApercuMonoPro-Bold',
		lineHeight: 34
	},

	icon_back: {
		position: 'absolute',
		top: 60,
		left: 20
	},

	password_wrapper: {
		flexDirection: 'row',
		position: 'relative'
	},

	text_input: {
		fontFamily: 'ApercuMonoPro-Bold',
		fontSize: 16,
		borderRadius: 5,
		width: 275,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#dde6eb',
		shadowOffset: {
			width: 0,
			height: 8
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,
		elevation: 17,
		marginBottom: 15,
		padding: 15,
		color: 'black',
		backgroundColor: 'white'
	}
});

export default styles;

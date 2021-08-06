import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from './Common.style.js';

const SignInScreen = ({ navigation, setIsSignedIn }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const user1 = {
		email: 'user1@example.com',
		password: '123456'
	};

	const validateUser = () => {
		if (email === user1.email && password === user1.password) {
			setIsSignedIn(true);
		} else {
			Alert.alert('Invalid email or password.');
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.icon_back} onPress={() => navigation.goBack()}>
				<AntDesign name='arrowleft' size={30} color='#c2c3c4' />
			</TouchableOpacity>

			<View style={styles.bg_solid} />

			<View style={styles.bg_image_container}>
				<Image source={require('../assets/signin-placeholder.jpg')} resizeMode='cover' style={styles.bg_image} />
			</View>

			<TextInput
				style={styles.text_input}
				placeholder='Email'
				placeholderTextColor='#7a7d80'
				keyboardType='email-address'
				autoCapitalize='none'
				value={email}
				onChangeText={setEmail}
			/>

			<View style={styles.password_container}>
				<TextInput
					style={styles.text_input}
					onChangeText={setPassword}
					placeholder='Password'
					placeholderTextColor='#7a7d80'
					autoCapitalize='none'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<TouchableOpacity style={styles.forgot_button} onPress={() => Alert.alert('Please check email.')}>
					<Text style={styles.forgot_text}>Forgot?</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={[styles.button, styles.button_pink]} onPress={validateUser}>
				<Text style={styles.button_text}>Sign In</Text>
			</TouchableOpacity>

			<View style={styles.social_signin}>
				<TouchableOpacity style={[styles.button, styles.button_facebook]} onPress={() => navigation.navigate('SignIn')}>
					<Text style={styles.button_text}>Facebook</Text>
					<FontAwesome name='facebook-f' size={20} color='white' style={[styles.icon, styles.icon_facebook]} />
				</TouchableOpacity>

				<TouchableOpacity style={[styles.button, styles.button_twitter]} onPress={() => navigation.navigate('SignIn')}>
					<Text style={styles.button_text}>Twitter</Text>
					<FontAwesome name='twitter' size={22} color='white' style={[styles.icon, styles.icon_twitter]} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SignInScreen;

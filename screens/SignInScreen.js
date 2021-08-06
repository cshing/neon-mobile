import React, { useState } from 'react';
import { Alert, Dimensions, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
			<View style={styles.bg_solid} />

			<View style={styles.bg_image}>
				<Image source={require('../assets/signin-placeholder.jpg')} resizeMode='cover' style={{ width: 275, height: 550 }} />
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

			<View style={styles.password_wrapper}>
				<View>
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
				</View>
				<TouchableOpacity style={styles.forgot_button} onPress={() => Alert.alert('Please check email.')}>
					<Text style={styles.forgot_text}>Forgot?</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.icon_back} onPress={() => navigation.goBack()}>
				<AntDesign name='arrowleft' size={30} color='#c2c3c4' />
			</TouchableOpacity>

			<View style={{ marginBottom: 45 }}>
				<TouchableOpacity style={[styles.button, { backgroundColor: '#f59ac3', shadowColor: '#f59ac3' }]} onPress={validateUser}>
					<Text style={styles.button_text}>Sign In</Text>
				</TouchableOpacity>
			</View>

			<View>
				<TouchableOpacity
					style={[styles.button, styles.button_icon_wrapper, { backgroundColor: '#4267b2', shadowColor: '#4267b2' }]}
					onPress={() => navigation.navigate('SignIn')}
				>
					<Text style={styles.button_text}>Facebook</Text>
					<FontAwesome name='facebook-f' size={20} color='white' style={[styles.button_icon, { right: 40 }]} />
				</TouchableOpacity>

				<TouchableOpacity style={[styles.button, { backgroundColor: '#1da1f2', shadowColor: '#1da1f2' }]} onPress={() => navigation.navigate('SignIn')}>
					<Text style={styles.button_text}>Twitter</Text>
					<FontAwesome name='twitter' size={22} color='white' style={[styles.button_icon, { right: 36 }]} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SignInScreen;

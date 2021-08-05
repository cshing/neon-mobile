import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../Common.style';

const DashboardScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Signed in!</Text>
			<Button title='Sign out' onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default DashboardScreen;

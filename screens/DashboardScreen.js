import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './Common.style';

const DashboardScreen = ({ setIsSignedIn }) => {
	return (
		<View style={styles.container}>
			<Text>Hi, you are signed in!</Text>
			<Button title='Sign out' onPress={() => setIsSignedIn(false)} />
		</View>
	);
};

export default DashboardScreen;

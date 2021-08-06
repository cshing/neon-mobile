import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Lato_900Black } from '@expo-google-fonts/lato';

import HomeScreen from './screens/HomeScreen.js';
import SignInScreen from './screens/SignInScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	let [fontsLoaded] = useFonts({
		Lato_900Black,
		'ApercuMonoPro-Bold': require('./assets/fonts/ApercuMonoPro-Bold.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isSignedIn ? (
					<>
						<Stack.Screen name='Dashboard' options={{ headerShown: false }}>
							{props => <DashboardScreen {...props} setIsSignedIn={setIsSignedIn} />}
						</Stack.Screen>
					</>
				) : (
					<>
						<Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
						<Stack.Screen name='SignIn' options={{ headerShown: false }}>
							{props => <SignInScreen {...props} setIsSignedIn={setIsSignedIn} />}
						</Stack.Screen>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import styles from '../Common.style.js';

const HomeScreen = ({ navigation }) => {
	// set up initial state for products
	const [products, setProducts] = useState({
		data: [],
		loading: false,
		error: ''
	});

	useEffect(() => {
		const fetchProducts = async () => {
			// initialize loading state to true
			setProducts(prevState => ({
				...prevState,
				loading: true
			}));

			try {
				// fetch data from Products endpoint with axios, then set results to data and set loading to false
				const url = `https://fakestoreapi.com/products?limit=10`;
				const res = await axios.get(url);
				setProducts(prevState => ({
					...prevState,
					data: res.data,
					loading: false
				}));
			} catch (error) {
				setProducts(prevState => ({
					...prevState,
					loading: false,
					error: 'Error retrieving Products data'
				}));
			}
		};
		fetchProducts();
	}, []);

	const { data, loading, error } = products;
	const windowWidth = Dimensions.get('window').width;

	const [activeIndex, setActiveIndex] = useState(0);
	const ref = useRef(null);

	const renderItem = ({ item, index }) => {
		return (
			<View style={styles.carousel_renderItem}>
				<Image style={styles.carousel_renderItem_image} resizeMode='cover' source={{ uri: item.image }} />
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{loading ? (
				<View style={styles.container}>
					<ActivityIndicator style={{ height: 425 }} />
				</View>
			) : (
				<SafeAreaView style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.header_text}>Welcome to{'\n'}Guilt-Free Shopping</Text>
					</View>
					<View style={styles.body}>
						<View style={styles.carousel}>
							<Carousel
								layout='default'
								ref={ref}
								data={data}
								sliderWidth={windowWidth}
								itemWidth={(windowWidth / 5) * 3.5}
								renderItem={renderItem}
								onSnapToItem={index => setActiveIndex(index)}
							/>
						</View>
						<TouchableOpacity style={[styles.button, { backgroundColor: '#f59ac3', shadowColor: '#f59ac3' }]} onPress={() => navigation.navigate('SignIn')}>
							<Text style={styles.button_text}>Start Shopping</Text>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			)}
		</View>
	);
};

export default HomeScreen;

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const texts = ['Hello', 'How', 'are', 'you'];

const {width: screenWidth} = Dimensions.get('window');

const ViewNewCar = ({ route, navigation }) => {
	const {car} = route.params;

	useEffect(() => {
		navigation.setOptions({
			headerTitle: car.name,
		});
	}, []);

	const carousel = useRef(null);

	const [activeIndex, setActiveIndex] = useState(0);

	const renderItem = ({item, index}, parallaxProps) => {
		return (
		  <View style={styles.item}>
			<ParallaxImage
			  source={{uri: item}}
			  containerStyle={styles.imageContainer}
			  style={styles.image}
			  parallaxFactor={0.4}
			  {...parallaxProps}
			/>
			<Text style={styles.title} numberOfLines={2}>
			  {item.title}
			</Text>
		  </View>
		);
	  };

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Carousel
					 ref={carousel}
					 sliderWidth={screenWidth}
					 sliderHeight={screenWidth}
					 itemWidth={screenWidth - 60}
					 data={car.carouselImages}
					 renderItem={renderItem}
					 hasParallaxImages={true}
				/>
			</View>
			<View style={styles.detailsContainer}>
				<Text></Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	item: {
	  width: screenWidth - 60,
	  height: screenWidth - 60,
	},
	imageContainer: {
	  flex: 1,
	  marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
	  backgroundColor: 'white',
	  borderRadius: 8,
	  marginVertical: 20,
	},
	image: {
	  ...StyleSheet.absoluteFillObject,
	  resizeMode: 'cover',
	},
	detailsContainer: {
	  paddingHorizontal: 20,
	},
  });

export default ViewNewCar;

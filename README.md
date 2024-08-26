
# `react-native-vertical-swiper`

`react-native-vertical-swiper` is a simple and customizable vertical swiper component for React Native applications. This package allows you to scroll through list items vertically and provides a flexible structure for customization.


https://github.com/user-attachments/assets/922c0485-6f3d-4f3b-84c1-6d9e0f4a62b3


## Features

- **Vertical Scrolling:** Allows you to scroll through list items vertically.
- **Customizable:** Offers customization options for rendered items.
- **Easy to Use:** Simple API and easy integration.

## Installation

You can install the package using npm or yarn:

```bash
npm install react-native-vertical-swiper 
or
yarn add react-native-vertical-swiper
```


## Usage

You can include the `VerticalSwiper` component in your application and use it as follows:

    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import VerticalSwiper from 'react-native-vertical-swiper';
    
    const App = () => {
     const data = [
      { id: '1', content: 'Item 1' },
	  { id: '2', content: 'Item 2' },
	  { id: '3', content: 'Item 3' }
	 ];
   
	 const renderItem = ({item}) => (
	  <View style={styles.item}>
		<Text>{item.content}</Text>
	  </View>
	 );
	   
	return ( 
	 <VerticalSwiper
		RenderItem={renderItem} 
		data={data} 
		size={0.7}
		outputRange={[0.9, 1, 0.9]}
	  /> 
	 );
 	};
 	
 	const styles = StyleSheet.create({
 	  item: {
	   flex: 1,
	   borderRadius: 12,
       backgroundColor: '#dedede',
       padding: 6,
 	  } 
 	});

   
### Props

-   **`RenderItem`** (`(item) => JSX.Element`): A function used to render each item in the swiper. This function is called with each item from the `data` array and should return a JSX element representing how the item should be displayed. (required)
    
-   **`data`**: An array of data objects to be displayed in the swiper. Each object in this array will be passed to the `RenderItem` function for rendering. (required)
    
-   **`size`** (`0.1 - 1`): The height of the swiper. This value determines the height of the swiper view and serves as the basis for the height of each item in the swiper. (optional)
    
-   **`outputRange`** (`[0.9, 1, 0.9]`): An array defining the range of output values for animations. This controls the animation behavior of the swiper, affecting how items are animated during scrolling. (optional)

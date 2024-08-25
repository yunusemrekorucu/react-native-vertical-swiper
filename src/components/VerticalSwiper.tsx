/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

interface VerticalSwiperProps {
  RenderItem: (item: any) => JSX.Element;
  data: any[];
  size: number;
  outputRange: number[];
}

const VerticalSwiper = ({
  RenderItem,
  data,
  size,
  outputRange = [0.9, 1, 0.9],
}: VerticalSwiperProps) => {
  const animation = new Animated.Value(0);

  const ITEM_SIZE = height * size;
  const SPACER_ITEM_SIZE = (height - ITEM_SIZE - 50) / 2;

  const verticalItem = ({ item, index }: { item: any; index: number }) => {
    const inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];

    const scale = animation.interpolate({
      inputRange,
      outputRange,
      extrapolate: "clamp",
    });

    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp",
    });

    if (item.image_url === undefined) {
      return <View style={{ height: SPACER_ITEM_SIZE }} />;
    }

    return (
      <Pressable style={{ height: ITEM_SIZE }}>
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ scale }],

              opacity,
            },
          ]}
        >
          <View
            style={[
              styles.card,
              {
                backgroundColor: "transparent",
                overflow: "hidden",
              },
            ]}
          >
            <RenderItem item={item} />
          </View>
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animation } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={1}
        decelerationRate={0}
        bounces={false}
        snapToInterval={ITEM_SIZE}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={verticalItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "100%",
  },
});
export default VerticalSwiper;

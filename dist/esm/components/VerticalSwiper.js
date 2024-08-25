/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Animated, Dimensions, Pressable, StyleSheet, View, } from "react-native";
var height = Dimensions.get("window").height;
var VerticalSwiper = function (_a) {
    var RenderItem = _a.RenderItem, data = _a.data, size = _a.size, _b = _a.outputRange, outputRange = _b === void 0 ? [0.9, 1, 0.9] : _b;
    var animation = new Animated.Value(0);
    var ITEM_SIZE = height * size;
    var SPACER_ITEM_SIZE = (height - ITEM_SIZE - 50) / 2;
    var verticalItem = function (_a) {
        var item = _a.item, index = _a.index;
        var inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];
        var scale = animation.interpolate({
            inputRange: inputRange,
            outputRange: outputRange,
            extrapolate: "clamp",
        });
        var opacity = animation.interpolate({
            inputRange: inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
        });
        if (item.image_url === undefined) {
            return React.createElement(View, { style: { height: SPACER_ITEM_SIZE } });
        }
        return (React.createElement(Pressable, { style: { height: ITEM_SIZE } },
            React.createElement(Animated.View, { style: [
                    styles.card,
                    {
                        transform: [{ scale: scale }],
                        opacity: opacity,
                    },
                ] },
                React.createElement(View, { style: [
                        styles.card,
                        {
                            backgroundColor: "transparent",
                            overflow: "hidden",
                        },
                    ] },
                    React.createElement(RenderItem, { item: item })))));
    };
    return (React.createElement(View, null,
        React.createElement(Animated.FlatList, { onScroll: Animated.event([{ nativeEvent: { contentOffset: { y: animation } } }], { useNativeDriver: true }), scrollEventThrottle: 1, decelerationRate: 0, bounces: false, snapToInterval: ITEM_SIZE, scrollEnabled: true, showsVerticalScrollIndicator: false, data: data, renderItem: verticalItem })));
};
var styles = StyleSheet.create({
    card: {
        height: "100%",
    },
});
export default VerticalSwiper;
//# sourceMappingURL=VerticalSwiper.js.map
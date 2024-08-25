import React from "react";
interface VerticalSwiperProps {
    RenderItem: (item: any) => JSX.Element;
    data: any[];
    size: number;
    outputRange: number[];
}
declare const VerticalSwiper: ({ RenderItem, data, size, outputRange, }: VerticalSwiperProps) => React.JSX.Element;
export default VerticalSwiper;

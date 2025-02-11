import { ReactNode } from "react";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
export type CarouselProps = {
    children?: ReactNode;
    carouselClassName?: string;
    className?: string;
    navigation?: boolean;
    plugins?: EmblaPluginType[];
} & EmblaOptionsType;
declare function Carousel({ children, className, carouselClassName, navigation, plugins, ...options }: CarouselProps): import("react").JSX.Element;
declare namespace Carousel {
    var Slide: typeof CarouselSlide;
}
export default Carousel;
export interface CarouselSlideProps {
    children?: ReactNode;
    className?: string;
}
declare function CarouselSlide({ children, className }: CarouselSlideProps): import("react").JSX.Element;

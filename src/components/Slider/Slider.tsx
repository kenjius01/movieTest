import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
import { Navigation, Lazy, Mousewheel } from 'swiper';
import { Children, useId } from 'react';

const Slider = ({
    children,

    settings,
}: {
    children: JSX.Element[];
    settings?: any;
}) => {
    const id = useId();
    return (
        <>
            <Swiper
                mousewheel={true}
                slidesPerView={1}
                spaceBetween={40}
                breakpoints={settings}
                navigation={true}
                lazy={true}
                modules={[Navigation, Lazy, Mousewheel]}
                className="mySwiper"
            >
                {Children.map(children, (child) => (
                    <SwiperSlide>{child}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;

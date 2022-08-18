import styles from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination, Autoplay } from 'swiper';
import { MovieInfo } from '../../interface/interface';
import CardCarousel from './CardCarousel';

const Carousel = ({ items }: { items: MovieInfo[] }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                    waitForTransition: true,
                }}
                lazy
                speed={4000}
                loop
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className={styles.swiper}
            >
                {items.map((item: MovieInfo) => (
                    <SwiperSlide key={item.id}>
                        <CardCarousel data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;

import styles from './Carousel.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardCarousel from './CardCarousel';
import { FcNext, FcPrevious } from 'react-icons/fc';

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <FcNext />
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <FcPrevious />
            </button>
        </div>
    );
};

const Carousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className={`${styles.wrapper} carousel`}>
            <Slider {...settings}>
                {items.map((item) => (
                    <CardCarousel key={item.id} item={item} />
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

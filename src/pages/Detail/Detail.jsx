import React from 'react';
import FeatureDetail from '../../components/FeatureDetail/FeatureDetail';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Detail.module.scss';
import DetailFeatureMovies from '../../components/DetailFeatureMovies/DetailFeatureMovies';

const Detail = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <FeatureDetail />
            <DetailFeatureMovies />
            <Footer />
        </div>
    );
};

export default Detail;

import Head from 'next/head';
import DetailFeature from '../../components/DetailFeature/DetailFeature';
import DetailFilmSection from '../../components/DetailFilmSection/DetailFilmSection';
import RecentSection from '../../components/DetailRecentSection/DetailRecentSection';
import DetailRecommendSection from '../../components/DetailRecommendSection/DetailRecommendSection';
import DetailTopMovieSection from '../../components/DetailTopMovieSection/DetailTopMovieSection';
import styles from '../../styles/Detail.module.scss';

const DetailMoviePage = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Detail Movie</title>
            </Head>
            <DetailFeature />
            <RecentSection />
            <DetailTopMovieSection />
            <DetailRecommendSection />
            <DetailFilmSection />
        </div>
    );
};

export default DetailMoviePage;

import styles from './Home.module.scss';
import Feature from '../../components/Feature/Feature';
import Header from '../../components/Header/Header';
import RecentSection from '../../components/RecentSection/RecentSection';
import TopMovies from '../../components/TopMovies/TopMovies';
import ShowSection from '../../components/ShowSection/ShowSection';
import FilmSection from '../../components/FilmSection/FilmSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <Header />
                <Feature />
                <RecentSection />
                <TopMovies />
                <ShowSection />
                <FilmSection />
                <Footer />
            </div>
        </div>
    );
};

export default Home;

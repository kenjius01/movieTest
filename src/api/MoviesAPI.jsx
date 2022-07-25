import axios from 'axios';

const API_KEY = 'c805fa1cad05662c12f0c25c8214f775';
const VIDEO_URL = 'https://api.themoviedb.org/3/movie';
const MOVIE_URL = 'https://api.themoviedb.org/3/discover/movie';
const TVSHOW_URL = 'https://api.themoviedb.org/3/discover/tv';

const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';

export const getPopularMovie = async () => {
    try {
        const res = await axios.get(
            MOVIE_URL +
                `?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_video=true`,
        );
        const { results } = res.data;
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const getVideoTrailer = async (id) => {
    try {
        const res = await axios.get(
            VIDEO_URL + `/${id}/videos?api_key=${API_KEY}&language=en-US`,
        );
        const { results } = res.data;
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const getTrending = async () => {
    try {
        const res = await axios.get(
            TRENDING_URL + `?api_key=${API_KEY}&language=en-US`,
        );
        const { results } = res.data;
        return results.slice(0, 5);
    } catch (error) {
        console.log(error);
    }
};

export const getTopMovie = () =>
    axios
        .get(
            MOVIE_URL +
                `?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        )
        .then((res) => res.data.results);

export const getTvShow = () =>
    axios
        .get(
            TVSHOW_URL +
                `?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
        )
        .then((res) => res.data.results);

export const getNewRelease = () =>
    axios
        .get(VIDEO_URL + `/upcoming?api_key=${API_KEY}&language=en-US&page=2`)
        .then((res) => res.data.results);

export const getEpisodesOfSeason = (season, id) =>
    axios
        .get(
            `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${API_KEY}&language=en-US`,
        )
        .then((res) => res.data.episodes);

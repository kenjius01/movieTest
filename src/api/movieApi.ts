import axios from 'axios';
import apiConfig from './apiConfig';

const API_KEY = apiConfig.apiKey;
const URL = apiConfig.baseUrl;

export const getPopularMovies = () =>
    axios
        .get(`${URL}discover/movie`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                sort_by: 'popularity.desc',
                page: '1',
            },
        })
        .then((res) => res.data.results);

export const getTvShow = () =>
    axios
        .get(`${URL}discover/tv`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                sort_by: 'popularity.desc',
                page: '1',
            },
        })
        .then((res) => res.data.results);

export const getTrending = () =>
    axios
        .get(`${URL}trending/movie/day`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: '1',
                sort_by: 'popularity.desc',
            },
        })
        .then((res) => res.data.results);

export const getSimilar = (type: string, id: string) =>
    axios
        .get(`${URL}${type}/${id}/similar`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data.results);

export const getRecommendationsTVShow = (type: string, id: string) =>
    axios
        .get(`${URL}${type}/${id}/recommendations`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data.results);

export const getTopMovies = () =>
    axios
        .get(`${URL}movie/top_rated`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data.results);
export const getTopTvShows = () =>
    axios
        .get(`${URL}tv/top_rated`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data.results);
export const getNewRelease = () =>
    axios
        .get(`${URL}movie/upcoming`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: '2',
            },
        })
        .then((res) => res.data.results);

export const getEpisodesOfSeason = (season: number, id: number) =>
    axios
        .get(`${URL}tv/${id}/season/${season}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data.episodes);

export const getVideoTrailer = (type: string, id: number) =>
    axios
        .get(`${URL}${type}/${id}/videos`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data.results);

export const getDetailMovie = (type: string, id: string) =>
    axios
        .get(`${URL}${type}/${id}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
        .then((res) => res.data);

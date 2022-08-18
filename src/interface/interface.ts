export interface MovieInfo {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TvInfo {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

type Genre = {
    name: string;
    id: number;
};

export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    id: number;
    name: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
}

export interface TrailerInfo {
    id: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    type: string;
}

export interface EpisodeInfo {
    id: number;
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    runtime: string;
    still_path: string;
}

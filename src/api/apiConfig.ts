const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c805fa1cad05662c12f0c25c8214f775',
    originalImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default apiConfig;

export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"

export const PROFILE_IMG = "https://occ-0-8551-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_ACCESS_KEY
  }
};

export const TRENDING_MOVIE_API = "https://api.themoviedb.org/3/trending/movie/day"
export const NOW_Playing_MOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIE_API = "https://api.themoviedb.org/3/movie/popular?&page=1"
export const TOP_RATED_MOVIE_API = "https://api.themoviedb.org/3/movie/top_rated?&page=1"
export const UPCOMING_MOVIE_API = "https://api.themoviedb.org/3/movie/upcoming?&page=1";

export const TMDB_MG_PATH = "https://image.tmdb.org/t/p/original"
export const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY


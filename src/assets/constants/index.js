// Facebook project fetch URL
export const FB_PROJECT_FETCH_URL = 'https://api.github.com/orgs/facebook/repos';

// Max pages for FB projects API
export const MAX_PAGES_FOR_FB_PROJECTS_API = 5;
// Max pages for contributors
export const MAX_PAGES_FOR_CONTRIBUTORS_API = 20;
// Max entries per page
export const MAX_ENTRIES_PER_PAGE = 100;

// SVG paths
export const SVG_PATH_CONTRIBUTORS = 'M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z';
export const SVG_PATH_FORKS = 'M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z';
export const SVG_PATH_PROGRAMMING_LANGUAGE = 'M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z';
export const SVG_PATH_WATCHERS = 'M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z';
export const SVG_PATH_SPINNER = 'M266.667,0C121.485,0,3.407,116.022,0.079,260.403C3.163,134.433,98.95,33.333,216.667,33.333   c119.661,0,216.667,104.467,216.667,233.333c0,27.614,22.386,50,50,50s50-22.386,50-50C533.333,119.391,413.942,0,266.667,0z    M266.667,533.333c145.182,0,263.259-116.021,266.587-260.402C530.17,398.901,434.383,500,316.667,500   C197.005,500,100,395.533,100,266.667c0-27.615-22.386-50-50-50s-50,22.386-50,50C0,413.942,119.391,533.333,266.667,533.333z';

// Data iterator keys, needed for accessing values from redux store
export const AVATAR_URL = 'avatar_url';
export const CONTRIBUTIONS = 'contributions';
export const CONTRIBUTORS_URL = 'contributors_url';
export const CREATED_AT = 'created_at';
export const DESCRIPTION = 'description';
export const FORKS_COUNT = 'forks_count';
export const FULL_NAME = 'full_name';
export const HOMEPAGE = 'homepage';
export const HTML_URL = 'html_url';
export const LANGUAGE = 'language';
export const LOGIN = 'login';
export const NAME = 'name';
export const UPDATED_AT = 'updated_at';
export const WATCHERS = 'watchers';
export const WATCHERS_COUNT = 'watchers_count';

// API statuses
export const FETCHING = 'fetching';
export const SUCCESS = 'success';
export const FAILURE = 'failure';
export const CANCELLED = 'cancelled';

// Back navigator symbol
export const BACK_SYMBOL = '<';

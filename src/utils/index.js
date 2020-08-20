import * as api from '../constants/api';

const DEFAULT_LIMIT = 10;

const resolveApiUrl = urlParams => {
    const searchParams = new URLSearchParams(urlParams);
    const limit = searchParams.get('limit') || DEFAULT_LIMIT;

    // TODO: check if search is active to append query
    return `${api.ALBUMS}&_limit=${limit}`;
};

export { resolveApiUrl };
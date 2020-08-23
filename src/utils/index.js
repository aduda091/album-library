import * as api from "../constants/api";

const DEFAULT_LIMIT = 10;

const resolveApiUrl = (urlParams, searchTerm) => {
    const searchParams = new URLSearchParams(urlParams);
    const limit = parseInt(searchParams.get("limit")) || DEFAULT_LIMIT;

    const query = searchTerm.length ? `&q=${searchTerm}` : "";

    return `${api.ALBUMS}&_limit=${limit}${query}`;
};

export { resolveApiUrl };

import axios from 'axios';

const apiUrl = 'https://voorhoede-colibri-api-rxmnpmphxz.now.sh/api/v1';

function getBlogPosts() {
    return axios
        .get(`${apiUrl}/posts?fields=title,authors,publishDate,slug&limit=10`)
        .then(response => response.data);
}

function getHeader() {
    return axios
        .get(`${apiUrl}/blog`)
        .then(response => response.data.subtitle);
}

export {
    getBlogPosts,
    getHeader
};

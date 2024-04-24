import axios from 'axios';
const KEY = 'AIzaSyBD5UAIh55mTmz9WvafIi91HPuox8IWMA8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
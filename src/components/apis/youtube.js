import axios from 'axios';

const KEY = 'AIzaSyAUCRSZpYT3Gu1ObKzzwsHsXAyYNZiy0bs'; //KEY capital means should not be changed

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,    
  }
});

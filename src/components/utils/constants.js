const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const MOST_POPULAR_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 10;
export const SEARCH_YOUTUBE_lIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export const VIDEO_INFO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

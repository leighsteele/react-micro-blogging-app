import axios from 'axios';
import { BASE_URL } from "../services/config";

export function getTweets() {
  return axios.get(`${BASE_URL}/tweet`);
}

export function postTweet(tweet) {
  return axios.post(`${BASE_URL}/tweet`, tweet);
}

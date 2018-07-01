import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-meal.firebaseio.com'
});

export default instance;
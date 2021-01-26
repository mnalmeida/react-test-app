import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-11b14.firebaseio.com/'
});

export default instance;
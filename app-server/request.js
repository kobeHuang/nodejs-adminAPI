import axios from 'axios';

export default (req) => {
    return axios.create({
        baseURL: 'http://127.0.0.1:3000/api',
        headers: {
            cookie: req.get('cookie') || ''
        }
    })
}
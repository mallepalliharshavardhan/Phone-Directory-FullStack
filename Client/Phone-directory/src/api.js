import axios from 'axios'

const API = axios.create({
baseURL:"http://localhost:7000/api/contacts",
});

export default API;
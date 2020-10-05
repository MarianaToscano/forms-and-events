import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID q2uIvmst22l_J5rgNn0_VKqRkctunaKTNmJgP8mdPB8'
  }
})
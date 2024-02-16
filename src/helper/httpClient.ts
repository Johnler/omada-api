import axios from "axios";
import https from 'https';
const { 
    OMADA_URL,
 } = process.env

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
})


instance.defaults.baseURL = OMADA_URL;

export default instance;
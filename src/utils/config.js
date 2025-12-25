import dotenv from 'dotenv'
dotenv.config();
export default {
    port: process.env.PORT,
    url: process.env.URL,
    secret: process.env.SECRET,
    masterKey: process.env.MASTER_KEY
    

}
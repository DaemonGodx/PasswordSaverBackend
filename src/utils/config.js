import dotenv from 'dotenv'
dotenv.config();
export default {
    port: process.env.PORT,
    url: process.env.URL,
    secret: process.env.SECRET,
    masterKey: process.env.MASTER_KEY,
    cors_origin: process.env.CORS_ORIGIN,
    cors_origin_prod: process.env.CORS_ORIGIN_PROD
    

}
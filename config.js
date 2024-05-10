import * as dotenv from 'dotenv';

dotenv.config();

export const USERNAME = process.env.VITE_USERNAME;
export const PASSWORD = process.env.VITE_PASSWORD;

// SendMail details
export const HOST = process.env.VITE_HOST;
export const SERVICE = process.env.VITE_SERVICE ;
export const EMAIL_PORT = process.env.VITE_EMAIL_PORT ;
 export const SECURE = process.env.VITE_SECURE ;
export const EMAIL_USER = process.env.VITE_EMAIL_USER ;
 export const EMAIL_PASS = process.env.VITE_EMAIL_PASS ;
export const BASE_URL = process.env.VITE_BASE_URL ;
export const COLLECTION_NAME = process.env.VITE_COLLECTION_NAME ;
export const DATABASE_NAME = process.env.VITE_DATABASE_NAME ;
export const GOOGLE_CLIENT_ID = process.env.VITE_GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.VITE_GOOGLE_CLIENT_SECRET ;
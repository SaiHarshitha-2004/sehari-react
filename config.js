import * as dotenv from 'dotenv';

dotenv.config();

export const USERNAME = process.env.VITE_USERNAME;
export const PASSWORD = process.env.VITE_PASSWORD;

// SendMail details
export const BASE_URL = process.env.VITE_BASE_URL ;
export const COLLECTION_NAME = process.env.VITE_COLLECTION_NAME ;
export const DATABASE_NAME = process.env.VITE_DATABASE_NAME ;

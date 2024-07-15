
import dotenv from 'dotenv';

dotenv.config();

export const USERNAME = process.env.VITE_USERNAME;
export const PASSWORD = process.env.VITE_PASSWORD;
export const DATABASE_NAME = process.env.VITE_DATABASE_NAME;
export const ENV_PORT = process.env.VITE_ENVPORT ;

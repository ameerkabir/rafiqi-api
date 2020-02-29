import * as dotenv from 'dotenv';

dotenv.config();
const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  appUrl: process.env.APP_URL,
  jwtSecret: process.env.JWT_SECRET,
  db: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connection: process.env.DB_CONNECTION_STRING
  }
};
if (process.env.NODE_ENV === "development") console.log({ config });

export default config;

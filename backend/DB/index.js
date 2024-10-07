import dotenv from "dotenv"

dotenv.config()

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool(
  {
    user: process.env.DB_USER,
    host:  process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  }
)


const dbConnect = async() => {

  let client;
  try {
    client = await pool.connect()
    console.log("Connected to database successfully");
  } catch (err) {
    console.log('Could not connect to database', err);
  } finally {
    if (client) {
      client.release()
      console.log("Client released successfully!");
      
    }
  }
}

export default dbConnect;
export { pool}
import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();
const USERNAME = 'postgres';
const PASSWORD = 'root';
const HOST = 'localhost';
const DATABASE = 'MockApiService';

const conStringPri = `postgres://${USERNAME}:${PASSWORD}@${HOST}/${DATABASE}`;
const Client = pg.Client;
const client = new Client({ connectionString: conStringPri });
client.connect();

export default client;

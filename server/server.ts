import dotenv from 'dotenv'
dotenv.config({ path: `.env` })
import express from 'express';
import helmet from 'helmet'
import routes from './utils/routes.utils';
import cors from 'cors'

const corsObject = { origin: process.env.ORIGIN, credentials: true }

const app = express();
app.use(cors(corsObject))
app.use(helmet())
routes(app);

app.listen(1337, () => console.log(`Express is listening at http://localhost:${1337}`));
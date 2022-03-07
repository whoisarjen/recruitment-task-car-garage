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
app.use(express.json())



// In routes normally I would make middleware basic on url
// Mostly I would do smth like this readToken -> schema (checking sent data) -> expectToken -> query
// Every query, which change data in db would be based on token.id
// Example https://github.com/whoisarjen/Juicify



routes(app);

app.listen(1337, () => console.log(`Express is listening at http://localhost:${1337}`));
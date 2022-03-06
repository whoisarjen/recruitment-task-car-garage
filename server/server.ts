import express from 'express';
import helmet from 'helmet'
import routes from './utils/routes.utils';

const app = express();
app.use(helmet())
routes(app);

app.listen(1337, () => console.log(`Express is listening at http://localhost:${1337}`));
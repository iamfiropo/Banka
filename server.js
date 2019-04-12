import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Debug from 'debug';
import dotenv from 'dotenv';

/*
import routes here
e.g import mealRoutes from '.routes/meal.route';
*/

// parse .env content and assign it to process.env
dotenv.config();

// calling an instance of express
const app = express();

// logging all request to console using morgan
app.use(logger('dev'));
const debug = Debug('http');
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1', (req, res) => res.status(200)
  .send({ message: 'Welcome to Banka API' }));

/*
handle
e.g app.use('/api/v1/meals', mealRoutes);
 */

app.listen(port, () => debug(`Server listening on port ${port}`));

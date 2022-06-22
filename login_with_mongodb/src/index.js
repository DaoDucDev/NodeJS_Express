import express from 'express';
import { engine } from 'express-handlebars';
import mongodb from 'mongodb';
import route  from './routes/index.js';
import db from './config/db/index.js'

db.connect();

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

route(app);

app.listen(3000);
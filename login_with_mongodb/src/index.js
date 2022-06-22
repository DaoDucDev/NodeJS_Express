import express from 'express';
import { engine } from 'express-handlebars';
import mongodb from 'mongodb';
import route  from './routes/index.js';

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/DaoDucDev'

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Có lỗi xảy ra');
    } else {
        console.log('Kết nối thành công!');
    }
})

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

route(app);

app.listen(3000);
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env
import express from 'express';
const app = express();
import cors from 'cors'
import morgan from 'morgan';// it package is use to show yout url endpoint
const port = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json())

//DataBase Connacted
import connactDb from './config/db.js';
connactDb()

//file imports
import testroute from './routes/testRoute.js'
import register from './routes/authRoutes.js'


//Routes
app.use('/api/v1/test', testroute)
app.use('/api/v1/auth', register)


app.get('/', (req, res) => {
    res.send('Resturant Backend Website is Working');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

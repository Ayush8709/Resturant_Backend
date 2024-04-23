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

//Routes

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

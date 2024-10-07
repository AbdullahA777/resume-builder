import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import dbConnect from './DB/index.js';
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan';

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 8000; 

dbConnect()
    .then(() => {
      const server =  app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        })
        process.on('SIGINT', () => {
            console.log('Shutting down server...');
            server.close(()=>{
                console.log('Server closed!');
                
                process.exit(0)
            })
        })

    }).catch((err) => { console.error(`Connect error in server file, Error: ${err}.`)})

import userRouter from './routes/routes.js'    


app.use('/api/users', userRouter)


import express from 'express';
import 'dotenv/config' 
import {connectDB} from './DB/connection.js';
import { Appinit } from './src/App.router.js';
import SendEmail from './src/services/SendEmail.js';

const app = express();
 
Appinit (app, express);

const PORT = process.env.PORT || 9000;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`server running on port ${PORT}`)
	})
});

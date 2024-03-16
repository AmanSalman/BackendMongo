import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './DB/connection.js';
import { Appinit } from './src/App.router.js';

const app = express();
dotenv.config();

Appinit (app, express);
const PORT = process.env.PORT || 9000;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`server running on port ${PORT}`)
	})
});

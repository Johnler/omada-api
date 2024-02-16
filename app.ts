require('dotenv').config({})
import express from 'express'
const port = process.env.PORT;
const app = express();

import InfoRouter from './src/routes/InfoRoutes';
import LoginRoutes from './src/routes/LoginRoutes';
import HotspotInterfaceRouter from './src/routes/HotspotInterfaceRoutes';

app.use(express.json());
app.use(InfoRouter);
app.use(LoginRoutes);
app.use(HotspotInterfaceRouter);

app.listen(port, () => console.log(`Running http://localhost:${port}`))


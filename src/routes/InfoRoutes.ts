import express from 'express';
const InfoRouter = express.Router();

import InfoController from '../controller/InfoController';
const controller = new InfoController;

InfoRouter.get('/info', controller.getInfo);
InfoRouter.get('/infoStatus', controller.getStatus)
InfoRouter.get('/infoSite', controller.getSiteInfo);

export default InfoRouter;
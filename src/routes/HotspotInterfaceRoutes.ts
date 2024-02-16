import express from 'express';
const HotspotInterfaceRouter = express.Router();
import HotspotInterfaceController from '../controller/HotspotInterfaceController';
const controller = new HotspotInterfaceController;


HotspotInterfaceRouter.get('/vouchers', controller.getListVoucer)


export default HotspotInterfaceRouter;
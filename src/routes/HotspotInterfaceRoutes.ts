import express from 'express';
const HotspotInterfaceRouter = express.Router();
import HotspotInterfaceController from '../controller/HotspotInterfaceController';
const controller = new HotspotInterfaceController;


HotspotInterfaceRouter.get('/vouchers', controller.getListVoucer)
HotspotInterfaceRouter.post('/vouchers', controller.generateVoucher)


export default HotspotInterfaceRouter;
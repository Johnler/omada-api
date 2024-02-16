import { Request, Response } from "express";
import HotspotInterfaceModel from "../model/HotspotInterfaceModel";

class HotspotInterfaceController extends HotspotInterfaceModel {
  getListVoucer = async (req: Request, res: Response) => {
    try {
      // const { cookie, token, controllerId, siteKey, startPage, endPage, status } = req.body;
      const response = await this.listOfVouchers(req.body);
      res.status(200).send(response.data);
    } catch (error) {
      console.log("%c Line:14 🍇 error", "color:#33a5ff", error);
      res.status(500).send({ message: "Error" });
    }
  };
}

export default HotspotInterfaceController;

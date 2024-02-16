import InfoModel from "../model/InfoModel";
import { Request, Response } from "express";

class InfoController extends InfoModel {
  getInfo = async (req: Request, res: Response) => {
    try {
      const response = await this.info();
      console.log(response.data);
      return res.json(response.data);
    } catch (error) {
      console.log("%c Line:13 🌰 error", "color:#465975", error);
      return res.status(500).send({ message: "Error!" });
    }
  };

  getStatus = async (req: Request, res: Response) => {
    try {
      const response = await this.status(req.body);
      return res.send(response.data);
    } catch (error) {
      console.log("%c Line:13 🌰 error", "color:#465975", error);
      return res.status(500).send({ message: "Error!" });
    }
  };

  getSiteInfo = async (req: Request, res: Response) => {
    try {
      const response = await this.infoSite(req.body);
      const result = response.data.result;
      return res.json({
        ...response.data,
        result: { ...result, siteKey: result.id },
      });
    } catch (error) {
      console.log("%c Line:22 🍬 error", "color:#ea7e5c", error);
      return res.status(500).send({ message: "Error!" });
    }
  };
}

export default InfoController;

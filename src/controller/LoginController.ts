import { Request, Response } from "express";
import LoginModel from "../model/LoginModel";

class LoginController extends LoginModel {
  controllerLogin = async (req: Request, res: Response) => {
    try {
      const { controllerId, username, password } = req.body;
      const response = await this.login(controllerId, username, password);
      // console.log(response)
      const cookie = response.headers["set-cookie"] || [];
      const TPEAP_SESSIONID = cookie[0].split(";")[0];
      console.log("%c Line:12 🥤 cookie", "color:#93c0a4", TPEAP_SESSIONID);
      const data = {
        ...response.data,
        cookie: TPEAP_SESSIONID,
      };
      res.send(data);
    } catch (error) {
      console.log("%c Line:13 🥃 error", "color:#4fff4B", error);
      res.status(500).send({ message: "Error" });
    }
  };
}

export default LoginController;

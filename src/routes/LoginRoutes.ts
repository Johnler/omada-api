import express from 'express'
const LoginRoutes = express.Router();

import LoginController from '../controller/LoginController';
const controller = new LoginController;

LoginRoutes.post('/login', controller.controllerLogin)


export default LoginRoutes;
import express from 'express';
import dataController from './Controllers/DataController/DataController';
import testController from './Controllers/TestController/TestController';
import middleware from './middlewares/middleware'


const router = express.Router();

router.get('/', testController.firstTest);

router.get('/teste/:id', testController.secondTest);

router.get('/testeQuery', testController.queryTest);

router.post('/formulario',
    middleware.validateText,
    middleware.validateInteger,
    middleware.validateBoolean,
    middleware.validateDropbox,
    middleware.validateRadioButton,
    dataController.exampleRoute);

export default router;
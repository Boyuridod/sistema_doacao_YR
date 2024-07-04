import express from 'express';
import dataController from './Controllers/DataController/DataController';
import testController from './Controllers/TestController/TestController';
import middleware from './Middlewares/middleware'
import DoadorController from './Controllers/DoadorController/DoadorController';
import DoacaoController from './Controllers/DoacaoController/DoacaoController';

const router = express.Router();

router.get('/', testController.firstTest);

router.get('/teste/:id', testController.secondTest);

router.get('/testeQuery', testController.queryTest);

router.post('/insertDoador', DoadorController.insert);

router.post('/getOneDoador', DoadorController.getOne);

router.post('/getOneById', DoadorController.getOneById);

router.post('/updateDoador', DoadorController.update);

router.post('/deleteDoador', DoadorController.updateSituacao);

router.post('/insertDoacao', DoacaoController.insert);

router.get('/getFromDate', DoacaoController.getFromDate);

router.post('/formulario',
    middleware.validateText,
    middleware.validateInteger,
    middleware.validateBoolean,
    middleware.validateDropbox,
    middleware.validateRadioButton,
    dataController.exampleRoute);

export default router;
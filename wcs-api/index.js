require('dotenv').config();

const express = require('express');
const userRouter = require('./src/routes/userRoutes');
const tastesRouter = require ('./src/routes/TastesRoutes')
const colorsRouter = require('./src/routes/ColorsRoutes');
const cepagesRouter = require('./src/routes/CepagesRoutes');
const rolesRouter = require('./src/routes/RolesRoutes');
const terroirsRouter = require('./src/routes/TerroirsRoutes');
const operatorsRouter = require("./src/routes/OperatorsRoutes");
const bottlePerCepageRouter = require("./src/routes/BottlePerCepageRoutes");
const tastingSheetRouter = require("./src/routes/TastingSheetRoutes");
const bottleRouter = require("./src/routes/BottleRoutes");
const tastingResultRouter = require("./src/routes/TastingResultRoutes");
const workshopRouter =require("./src/routes/WorkshopRoutes");
const selectForUserRouter = require("./src/routes/SelectForUserRoutes");
const aromasRouter = require('./src/routes/AromasRoutes');
const IntensityRouter = require('./src/routes/IntensityRoutes');
const flavorsRouter = require('./src/routes/FlavorsRoutes');


const port = process.env.APP_PORT || 8080;
const app = express();

app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function(req, res) {
    const { version } = require('./package.json'); 

    return res.json({ version })
})

APIRouter.use('/users', userRouter);
APIRouter.use('/tastes', tastesRouter);
APIRouter.use('/colors', colorsRouter);
APIRouter.use('/cepages', cepagesRouter);
APIRouter.use('/roles', rolesRouter);
APIRouter.use('/terroirs', terroirsRouter);
APIRouter.use('/operators', operatorsRouter);
APIRouter.use('/bottlepercepage', bottlePerCepageRouter);
APIRouter.use('/tastingsheet', tastingSheetRouter);
APIRouter.use('/bottle', bottleRouter);
APIRouter.use('/tastingResult', tastingResultRouter);
APIRouter.use('/workshop', workshopRouter);
APIRouter.use('/selectForUser', selectForUserRouter);
APIRouter.use('/intensity', IntensityRouter);
APIRouter.use('/aromas', aromasRouter);
APIRouter.use('/flavors', flavorsRouter);


app.use('/api', APIRouter);



app.listen(port, function() {
    console.log('API is running on %s', port)
})
import express from "express";
import homeController from "../controller/homeController";

let router = express.Router()
homeController
let initWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage);
    router.get('/about',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud',homeController.displayGetCRUD);
    router.get('/edit-crud',homeController.displayGetEditCRUD);
    router.post('/put-crud',homeController.putCRUD);
    router.get('/delete-crud',homeController.deleteCRUD);
    return app.use("/",router);
}

module.exports = initWebRoutes;
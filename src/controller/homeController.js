import db from '../models/index';
import CRUDService from "../services/CRUDservice";
let getHomePage = async(req,res)=>{
    try {
        let data = await db.User.findAll();
        console.log('__________________________________');
        console.log(data);
        console.log('__________________________________');
    return res.render('homepage.ejs',{
        data:JSON.stringify(data),
    });
    } catch (e) {
        console.log(e);
    }
    
}
let getCRUD = (req,res)=>{
    return res.render('crud.ejs');
}
let getAboutPage = (req,res)=>{
    return res.render('test/about.ejs');
}
let postCRUD = async (req,res)=>{
    //return res.render('test/about.ejs');
    let message = await CRUDService.creatNewUser(req.body);
    console.log(message)
    return res.send('post')
}
let displayGetCRUD = async(req,res)=>{
    let  data = await CRUDService.getAllUser();
    console.log('____________________________________________')
    console.log(data)
    console.log('____________________________________________')
    return res.render('displayCRUD.ejs',{
        dataTable:data
    });
}
let displayGetEditCRUD = async(req,res)=>{
    let userId =req.query.id
    if(userId)
    {
        let userData = await CRUDService.getUserInfoById(userId)
        return res.render('editCRUD',{
            user : userData
        })
    }
    else{
        return res.send('User not found')
    }
    
}
let putCRUD = async(req,res)=>{
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data)
    return res.render('displayCRUD.ejs',{
        dataTable:allUsers
})}
let deleteCRUD = async(req,res)=>{
    let Id =req.query.id
    
    // return res.render('displayCRUD.ejs',{
    //     delete:deleteUsers
    if(Id)
    {
        let deleteUsers = await CRUDService.deleteUserData(Id)
        return res.send('delete success')
    }
    else {
        return res.send('delete not found')
    }
    }
module.exports = {
    getHomePage:getHomePage,
    getAboutPage:getAboutPage,
    getCRUD:getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    displayGetEditCRUD:displayGetEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}
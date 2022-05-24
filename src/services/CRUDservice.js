import db from '../models/index';
import bcrypt from 'bcryptjs';
//import User from '../models/user';
const salt = bcrypt.genSaltSync(10);
let creatNewUser = async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt= await hashUserPassword(data.password);
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                password: hashPasswordFromBcrypt,
                email: data.email,
                address: data.address,
                gender: data.gender ==='1'? true : false,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
            })
            resolve('ok')
        } catch (e) {
            reject(e)
        }
    })
    
}

let hashUserPassword = (password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
       
       
    })
}
let getAllUser = () =>{
    return new Promise((resolve,reject)=>{
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfoById = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user= await db.User.findOne({
                where: {id: userId},
                raw: true,
            })
            if(user){
                resolve(user)
            }
            else resolve([])
        } catch (e) {
            reject(e)
        }
    })
}
let updateUserData = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id:data.id},
            })
            
            if(user){
                user.firstName=data.firstName,
                user.lastName=data.lastName,
                user.address=data.address,
                await user.save()
                let allUsers = await db.User.findAll()
                resolve(allUsers)
            }
            else resolve([]);
        } catch (e) {
            reject(e)
        }
    })
}
let deleteUserData = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id:userId},
            })
            if(user){
                await user.destroy();
                
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    creatNewUser: creatNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserData: deleteUserData,

}

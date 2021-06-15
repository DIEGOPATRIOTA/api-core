import UserRepository from '../repositories/userRepository';
import User, { IUser } from '../models/user';

export interface IUserController {
    get: any,
    create: any,
    update: any,
    delete: any
}

class UserController implements IUserController{
    constructor() { }

    async get(request: any, response: any) {
        try {
            const userId = request.query && request.query.userId ? request.query.userId : undefined;
            
            const result = userId ? await UserRepository.getById(userId) : await UserRepository.getAll();
            
            if (result) {
                response.status(200).send(result);           
            } else {
                response.status(400).send({
                    status: 400,
                    msg: "The server cannot or will not process the request due to a client error."
                });
            }
            
        } catch (error) {            
            response.status(500).send({
                status: 500,
                msg: "Internal error."
            });            
        }
        
    }

    async update(request: any, response: any) {
        try {
            const user = request && request.body ? request.body : undefined;
            
            const result = user ? await UserRepository.update(user._id, user) : undefined;
            if (result) {
                response.status(200).send(result);           
            } else {
                response.status(400).send({
                    status: 400,
                    msg: "The server cannot or will not process the request due to a client error."
                });
            }
            
        } catch (error) {          
            response.status(500).send({
                status: 500,
                msg: "Internal error"
            });            
        }        
    }


    async delete(request: any, response: any) {
        try {
            const userId = request && request.body ? request.body : undefined;
            
            const result = userId ? await UserRepository.delete(userId) : undefined;
            
            if (result) {
                response.status(200).send(result);           
            } else {
                response.status(400).send({
                    status: 400,
                    msg: "The server cannot or will not process the request due to a client error."
                });
            }
            
        } catch (error) {          
            response.status(500).send({
                status: 500,
                msg: "Internal error"
            });            
        }        
    }

    async create(request: any, response: any) {

        try {            
            const body = request.body;
          
            const name = body ? body.name : false;
            const email  = body ? body.email  : false;
            const password  = body ? body.password  : false;
    
            if (name && email && password) {
    
                const newUser = new User;
    
                newUser.name = name;
                newUser.email  = email;
                newUser.password  = password;
                const result = await UserRepository.create(newUser);
                response.status(201).send(result);
            } else {
                response.status(400).send({
                    status: 400,
                    msg: "The server cannot or will not process the request due to a client error."
                });
            }
        } catch (error) {
            response.status(500).send({
                status: 500,
                msg: "Internal error."
            });
        }


    }
    
}

export default new UserController();
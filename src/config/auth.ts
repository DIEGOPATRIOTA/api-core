import jwt = require("jsonwebtoken");
import { Request, Response } from 'express'; 

import config from '../config/config';

class Auth {

    constructor() { }

    validate(request: Request, response: Response, next: any) {

        const tokenRequest = request.headers['authorization'];

        const token = tokenRequest !== undefined ? tokenRequest.slice(7, tokenRequest.length) : undefined;
        
        if (token) {
            jwt.verify(token, config.secret, function (err: any, decoded: any) {
                if (err) {
                    return response.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
                } else {

                    console.log('[JWT] Authorization OK')
                    next();
                }
            });
        } else {
            console.log('403 - Forbidden')
            return response.status(403).send({
                success: false,
                message: '403 - Forbidden'
            });
        }
    }
}

export default new Auth;
import config from './config';
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

class Database {
    private host: string = config.host;
    private port: number = config.port;
    private dataBase: string = config.dataBase;
    private userName: string = config.userName;
    private password: string = config.password;
    
    constructor() { }

    async connect() {
        try {
            const mongodbURL = `mongodb://${this.userName ? `${this.userName}:${this.password}@` : ''}${this.host}:${this.port}/${this.dataBase}`;
            await mongoose.connect(mongodbURL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true } );
            console.log('[DB] Mongoose connected');
        } catch (err) {
            console.log('[DB] Mongoose Error - ', err);
            return process.exit(1);
        }
    };

}

export default Database;

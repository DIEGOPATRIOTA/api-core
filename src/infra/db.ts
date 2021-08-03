import mongoose from "mongoose";

mongoose.Promise = global.Promise;

class Database {
    private host: string = String(process.env.MONGO_HOST);
    private port: number = Number(process.env.MONGO_PORT);
    private dataBase: string = String(process.env.MONGO_DATA_BASE);
    private userName: string = String(process.env.MONGO_USERNAME);
    private password: string = String(process.env.MONGO_PASSWORD);
    
    constructor() {}

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

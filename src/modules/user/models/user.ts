import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    name: { 
        type: String
    },
    email: { 
        type: String,         
    },
    password: {
        type: String
    }
}

export const UserSchema: Schema = new Schema({
    name: { 
        type: String, 
        index: { unique: true }, 
        required: true, 
    },
    email: { 
        type: String, 
        index: { unique: true }, 
        required: true, 
    },
    password: { 
        type: String, 
        required: true, 
    },

});

// Export the model and return your IUser interface
const User = model<IUser>('users', UserSchema);
export default User;


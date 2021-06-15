import { Model, Types } from 'mongoose';
import User, { IUser } from '../models/user';

class UserRepository {
  
    constructor() {}
    
        async getAll() {
          return await User.find();
        }

        async getById(_id: string) {
          return await User.findOne({_id: _id});
        }

        async create(user: IUser) {
          return await User.create(user);
        }
        
        async update(_id: string, user: IUser) {
          const updateUser = (<any>Object).assign({}, user);
          return await User.findOneAndUpdate({_id: _id}, { $set: updateUser }, { new: true });
        }

        async delete(_id: string) {
          return await User.findOneAndRemove({_id: _id});
        }
}
export default new UserRepository;
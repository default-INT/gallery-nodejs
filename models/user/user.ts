import { model, Schema, Types } from 'mongoose';
import { requiredType } from 'shared/utils/requiredType';

const User = {
  id: Types.ObjectId,
  firstName: requiredType(String),
  lastName: requiredType(String),
  userName: requiredType(String),
  birthDate: requiredType(Date),
  password: requiredType(String),
  fieldOfActivity: requiredType(String),
  city: requiredType(String),

  posts: [{ type: Types.ObjectId, ref: 'Post' }],
};

export const UserSchema = new Schema(User);
export const UserModel = model('User', UserSchema);

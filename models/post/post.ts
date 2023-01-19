import { model, Schema, Types } from 'mongoose';
import { requiredType } from 'shared/utils/requiredType';
import { ModelNames } from '../types';

const Post = {
  id: Types.ObjectId,
  name: requiredType(String),
  description: requiredType(String),
  publicationDate: requiredType(Date),
  imageUri: requiredType(String),
  deleted: { ...requiredType(Boolean), default: false },

  user: { type: Types.ObjectId, required: true, ref: 'User' },
};

export const PostSchema = new Schema(Post);
export const PostModel = model(ModelNames.Post, PostSchema);

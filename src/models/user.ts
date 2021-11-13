import { hash } from 'bcryptjs';

import mongoose from '../database';

import User from '../interfaces/User';

const UserSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre<User>('save', async function (next) { // eslint-disable-line
  const pw = await hash(this.password, 8);
  this.password = pw;

  next();
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;

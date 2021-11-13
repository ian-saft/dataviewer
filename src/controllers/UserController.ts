import { Request, Response } from 'express';

import User from '../models/user';

export default class UserController {
  public async find(req: Request, res: Response) {
    const email = req.query.email as string;
    const name = req.query.name as string;

    try {
      if (email) {
        const user = await User.findOne({ email });

        return res.json({ user });
      }

      const users = await User.find({ name });

      return res.json({ users });
    } catch {
      return res.status(400).json({ message: 'Failed to search for user.' });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const userFound = await User.findOne({ email: req.body.email });

      if (userFound) {
        return res.status(400).json({ message: 'E-mail already registered.' });
      }

      const user = await User.create(req.body);

      return res.json({ user });
    } catch {
      return res.status(400).json({ message: 'Creation failed.' });
    }
  }
}

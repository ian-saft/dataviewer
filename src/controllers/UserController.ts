import { Request, Response } from 'express';

export default class UserController {
  public find(req: Request, res: Response) {
    return res.json({ user: 'user object' });
  }
}

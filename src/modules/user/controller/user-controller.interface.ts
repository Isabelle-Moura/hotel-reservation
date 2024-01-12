import { Request, Response } from "express";

export interface IUserController {
   getAll(req: Request, res: Response): Promise<void>;

   getByEmail(req: Request, res: Response): Promise<void>;

   getById(req: Request, res: Response): Promise<void>;

   create(req: Request, res: Response): Promise<void>;

   update(req: Request, res: Response): Promise<void>;

   softDelete(req: Request, res: Response): Promise<void>;
}

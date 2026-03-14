import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json({ success: true, data: users });
        } catch (error) {
            next(error);
        }
    };

    public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = await this.userService.getUserById(req.params.id as string);
            if (!user) {
                res.status(404).json({ success: false, message: 'User not found' });
                return;
            }
            res.status(200).json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    };

    public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json({ success: true, data: user });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    };

    public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = await this.userService.updateUser(req.params.id as string, req.body);
            if (!user) {
                res.status(404).json({ success: false, message: 'User not found' });
                return;
            }
            res.status(200).json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    };

    public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const success = await this.userService.deleteUser(req.params.id as string);
            if (!success) {
                res.status(404).json({ success: false, message: 'User not found' });
                return;
            }
            res.status(200).json({ success: true, message: 'User deleted' });
        } catch (error) {
            next(error);
        }
    };
}

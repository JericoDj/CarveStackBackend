"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    userService;
    constructor() {
        this.userService = new user_service_1.UserService();
    }
    getAllUsers = async (req, res, next) => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json({ success: true, data: users });
        }
        catch (error) {
            next(error);
        }
    };
    getUserById = async (req, res, next) => {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) {
                res.status(404).json({ success: false, message: 'User not found' });
                return;
            }
            res.status(200).json({ success: true, data: user });
        }
        catch (error) {
            next(error);
        }
    };
    createUser = async (req, res, next) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json({ success: true, data: user });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    };
    updateUser = async (req, res, next) => {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            if (!user) {
                res.status(404).json({ success: false, message: 'User not found' });
                return;
            }
            res.status(200).json({ success: true, data: user });
        }
        catch (error) {
            next(error);
        }
    };
    deleteUser = async (req, res, next) => {
        try {
            const success = await this.userService.deleteUser(req.params.id);
            if (!success) {
                res.status(404).json({ success: false, message: 'User not found' });
                return;
            }
            res.status(200).json({ success: true, message: 'User deleted' });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.UserController = UserController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
// Mock database
let users = [];
class UserRepository {
    async findAll() {
        return users;
    }
    async findById(id) {
        return users.find((user) => user.id === id) || null;
    }
    async create(data) {
        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            createdAt: new Date(),
        };
        users.push(newUser);
        return newUser;
    }
    async update(id, data) {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1)
            return null;
        users[userIndex] = { ...users[userIndex], ...data };
        return users[userIndex];
    }
    async delete(id) {
        const initialLength = users.length;
        users = users.filter((user) => user.id !== id);
        return users.length !== initialLength;
    }
}
exports.UserRepository = UserRepository;

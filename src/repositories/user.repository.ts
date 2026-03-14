import { User, CreateUserDTO, UpdateUserDTO } from '../types/user.interface';

// Mock database
let users: User[] = [];

export class UserRepository {
    async findAll(): Promise<User[]> {
        return users;
    }

    async findById(id: string): Promise<User | null> {
        return users.find((user) => user.id === id) || null;
    }

    async create(data: CreateUserDTO): Promise<User> {
        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            createdAt: new Date(),
        };
        users.push(newUser);
        return newUser;
    }

    async update(id: string, data: UpdateUserDTO): Promise<User | null> {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) return null;

        users[userIndex] = { ...users[userIndex], ...data };
        return users[userIndex];
    }

    async delete(id: string): Promise<boolean> {
        const initialLength = users.length;
        users = users.filter((user) => user.id !== id);
        return users.length !== initialLength;
    }
}

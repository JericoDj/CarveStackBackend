import { UserRepository } from '../repositories/user.repository';
import { User, CreateUserDTO, UpdateUserDTO } from '../types/user.interface';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async getUserById(id: string): Promise<User | null> {
        return this.userRepository.findById(id);
    }

    async createUser(data: CreateUserDTO): Promise<User> {
        if (!data.email || !data.name) {
            throw new Error('Email and Name are required');
        }
        return this.userRepository.create(data);
    }

    async updateUser(id: string, data: UpdateUserDTO): Promise<User | null> {
        return this.userRepository.update(id, data);
    }

    async deleteUser(id: string): Promise<boolean> {
        return this.userRepository.delete(id);
    }
}

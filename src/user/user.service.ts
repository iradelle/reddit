import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateUserDto} from "./create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    async getAll(): Promise<User[]>{
        return await this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto): Promise<User>{
        const user: User = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.userRepository.findOneBy({email});
    }


}

import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./create-user.dto";
import * as bcrypt from 'bcrypt';
import {compare} from "bcrypt";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    getAll():Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async getUserByEmail(email: string):Promise<User> {
        return await this.userRepository.findOneBy({email});
    }

}

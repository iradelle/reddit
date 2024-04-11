import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateUserDto} from "./create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    getAll(){
        return this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto){
        const user: User = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user)
    }


}

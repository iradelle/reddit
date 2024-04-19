import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {LoginDto} from "./login.dto";
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import {User} from "../user/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private jwtService: JwtService) {}

    async validate(loginDto: LoginDto) {
        const user: User = await this.userService.getUserByEmail(loginDto.email);

        if (!user) {
            throw new NotFoundException('User with this email does not exist.')
        }

        // preveri geslo
        if (!(await bcrypt.compare(loginDto.password, user.password))) {
            throw new BadRequestException('Password incorrect');
        }

        // vrne JWT Token
        const payload = {email:user.email, sub:user.id};
        return this.jwtService.sign(payload);
    }
}

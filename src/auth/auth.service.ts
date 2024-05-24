import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {LoginDto} from "./login.dto";
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import {User} from "../user/user.entity";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {
    }

    async validate(loginDto: LoginDto) {
        console.log("Service Auth validate");
        //preveri, če user v bazi s tem emailom obstaja
        const user:User = await this.userService.getUserByEmail(loginDto.email);
        if (!user) {
            throw new NotFoundException('Uporabnik ne obstaja');
        }
        //preverimo gesla
        if (!(await bcrypt.compare(loginDto.password,user.pass))) {
            throw new BadRequestException('Gesli se ne ujemata');
        }

        const payload = {email:user.email, sub:user.id};

        return this.jwtService.sign(payload);

    }
}

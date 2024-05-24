import {Controller, Get, Post, Delete, Body} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {CreateUserDto} from "./create-user.dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    getAll():Promise<User[]> {
        return this.userService.getAll();
    }

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }
}

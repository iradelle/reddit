import {Body, Controller, Delete, Get, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./create-user.dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    getAll(){
        return this.userService.getAll();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

}

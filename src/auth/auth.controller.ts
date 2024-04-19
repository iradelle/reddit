import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {LoginDto} from "./login.dto";
import {AuthService} from "./auth.service";
import {LocalGuard} from "./guards/local.guard";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(LocalGuard)
    @Post('login')
    login (@Body() loginDto: LoginDto) {
        // preverimo če user obstaja
        return this.authService.validate(loginDto);
    }

    @UseGuards(LocalGuard)
    @Get('profile')
    getUserData(){

    }
}

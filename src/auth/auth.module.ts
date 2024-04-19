import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";
import {JwtModule, JwtService} from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forFeature([User]),
            JwtModule.register({
              secret: 'sktivnost666',
              signOptions: {expiresIn: '5h'}
            })],
  providers: [AuthService, UserService],
  controllers: [AuthController]
})
export class AuthModule {}

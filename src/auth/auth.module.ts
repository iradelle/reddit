import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";
import {JwtModule} from "@nestjs/jwt";
import {LocalStrategy} from "./strategies/local.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      PassportModule,
      ConfigModule.forRoot(),
      TypeOrmModule.forFeature([User]),
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '5h'}
      })],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}

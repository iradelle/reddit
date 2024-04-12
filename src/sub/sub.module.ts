import { Module } from '@nestjs/common';
import { SubController } from './sub.controller';
import { SubService } from './sub.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubEntity} from "./sub.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SubEntity])],
  controllers: [SubController],
  providers: [SubService]
})
export class SubModule {}

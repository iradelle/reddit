import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {SubEntity} from "./sub.entity";
import {Repository} from "typeorm";
import {CreateUpdateSubDto} from "./create-update-sub.dto";

@Injectable()
export class SubService {

    constructor(
        @InjectRepository(SubEntity) private readonly subRepository: Repository<SubEntity>
    ) {}

    async create(createSub: CreateUpdateSubDto) {
        const user_id = 1;
        const data = {...createSub, user: {id: user_id}};
        const sub = this.subRepository.create(data);
        return await this.subRepository.save(sub);
    }

    async readAll() {
        return await this.subRepository.find();
    }

    async update(id: number, updateSub: CreateUpdateSubDto) {
        await this.subRepository.update(id, updateSub);
        return this.subRepository.findOneBy({id});
    }

    async delete(id: number) {
        return await this.subRepository.delete(id);
    }

}

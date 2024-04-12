import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {SubService} from "./sub.service";
import {CreateUpdateSubDto} from "./create-update-sub.dto";

@Controller('subs')
export class SubController {

    constructor(private readonly subService: SubService) {
    }

    @Post()
    createSub(@Body() createSub: CreateUpdateSubDto) {
        return this.subService.create(createSub);
    }

    @Get()
    readAll() {
        return this.subService.readAll();
    }

    @Patch(':id')
    updateSub(@Param('id') id: number, @Body() updateSub: CreateUpdateSubDto) {
        return this.subService.update(id, updateSub);
    }

    @Delete(':id')
    deleteSub(@Param('id') id: number) {
        return this.subService.delete(id);
    }

}

import {IsNotEmpty} from "class-validator";

export class CreateUpdateSubDto {
    @IsNotEmpty()
    content: string;
}
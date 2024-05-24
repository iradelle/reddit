import {IsNotEmpty} from "class-validator";

export class CreateSubDto {
    @IsNotEmpty()
    content:string;
}
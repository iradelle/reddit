import {IsNotEmpty} from "class-validator";

export class CreateUpdateArticleDto {
    @IsNotEmpty()
    content:string;

    @IsNotEmpty()
    sub_id:number;
}
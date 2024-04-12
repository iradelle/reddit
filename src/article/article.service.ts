import { Injectable } from '@nestjs/common';
import {DeleteResult, Repository} from "typeorm";
import {ArticleEntity} from "./article.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateUpdateArticleDto} from "./create-update-article.dto";

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository: Repository<ArticleEntity>
    ) {
    }

    async create(createArticle: CreateUpdateArticleDto):Promise<ArticleEntity> {
        const user_id= 1;
        const data = {...createArticle,user:{id:user_id}, sub:{id:createArticle.sub_id}};
        const article = this.articleRepository.create(data);
        return await this.articleRepository.save(article);
    }

    async readAll():Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }

    delete(id:number):Promise<DeleteResult> {
        return this.articleRepository.delete(id);
    }
}

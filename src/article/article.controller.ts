import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateUpdateArticleDto} from "./create-update-article.dto";
import {ArticleService} from "./article.service";
import {ArticleEntity} from "./article.entity";

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {
    }
    @Post()
    createArticle(@Body() createArticle:CreateUpdateArticleDto): Promise<ArticleEntity> {
        return this.articleService.create(createArticle);
    }
    @Get()
    readAllArticle():Promise<ArticleEntity[]> {
        return this.articleService.readAll();
    }
    @Put()
    updateArticle() {
        return 'Nik';
    }
    @Delete(':id')
    deleteArticle(@Param('id') id:number) {
        return this.articleService.delete(id);
    }
}

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../user/user.entity";
import {ArticleEntity} from "../article/article.entity";

@Entity('subs')
export class SubEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content:string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at:Date;

    @ManyToOne(()=>User,(user:User)=>user.subs)
    @JoinColumn({name:'user_id'})
    user:User;

    @OneToMany(()=>ArticleEntity, (articleEntity: ArticleEntity)=>articleEntity.sub)
    articles:ArticleEntity[];
}
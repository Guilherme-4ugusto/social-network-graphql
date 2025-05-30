import { Field, ObjectType } from "type-graphql";
import { User } from "./user-model";
import { PostImage } from "./post-image-model";
import { PostComment } from "./post-comment-model";

@ObjectType()
export class Post {
    @Field()
    id: number;

    @Field(() => String, { nullable: true })
    caption?: string | null

    @Field(() => User, { nullable: true })
    creator?: User | null

    @Field()
    createdAt: Date

    @Field(() => Date, { nullable: true })
    archivedAt?: Date | null

    @Field(() => [PostImage], { nullable: true })
    postImage?: PostImage[] | null

    @Field(() => [PostComment], { nullable: true })
    postComment?: PostComment[] | null
} 

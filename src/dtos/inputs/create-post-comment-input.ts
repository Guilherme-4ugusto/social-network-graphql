import { Field, InputType } from "type-graphql";

@InputType()
export class PostCommentInput {
    @Field()
    comment: string;

    @Field()
    postId: number;

    @Field()
    authorId: number;
}
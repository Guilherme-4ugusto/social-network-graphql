import { IsEmail, IsUrl } from "class-validator";
import { Field, InputType } from "type-graphql";
import { PostImageInput } from "./creat-post-image-input";

@InputType()
export class CreatePostInput {
    @Field(() => String, { nullable: true })
    caption?: string

    @Field()
    creatorId: number

    @Field(() => [PostImageInput])
    imagesUrls: PostImageInput[]
}
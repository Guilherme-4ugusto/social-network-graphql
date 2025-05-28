import { IsEmail, IsUrl } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePostInput {
    @Field(() => String, { nullable: true })
    caption?: string

    @Field()
    userId: string
}
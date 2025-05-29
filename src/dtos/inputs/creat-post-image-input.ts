import { Field, InputType } from "type-graphql";

@InputType()
export class PostImageInput {
    @Field()
    imageUrl: string;
}
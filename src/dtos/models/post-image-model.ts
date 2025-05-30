import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PostImage {
    @Field()
    id: number;

    @Field(() => String, { nullable: true })
    imageUrl?: string | null;

    @Field()
    createdAt: Date
} 
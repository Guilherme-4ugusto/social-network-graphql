import { Field, ObjectType } from "type-graphql";
import { User } from "./user-model";

@ObjectType()
export class PostComment {
    @Field()
    id: number;

    @Field(() => String)
    comment: string

    @Field(() => User, { nullable: true })
    author?: User | null

    @Field()
    createdAt: Date
} 
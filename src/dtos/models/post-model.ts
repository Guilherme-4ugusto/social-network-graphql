import { Field, ObjectType } from "type-graphql";
import { User } from "./user-model";

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
} 

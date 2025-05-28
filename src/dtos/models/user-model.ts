import { Field, Int, ObjectType } from "type-graphql";
import { Follow } from "./follow-user-model";

@ObjectType()
export class User {
    @Field()
    id: number;

    @Field()
    username: string

    @Field()
    email: string

    @Field()
    name: string

    @Field()
    createdAt: Date

    @Field(() => Date, { nullable: true })
    disabledAt?: Date | null

    @Field(() => [Follow], { nullable: true })
    followers?: Follow[] | null

    @Field(() => [Follow], { nullable: true })
    following?: Follow[] | null

} 
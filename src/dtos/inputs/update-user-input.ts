import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateUserInput{
    @Field(() => String, { nullable: true })
    username?: string

    @Field(() => String, { nullable: true })
    @IsEmail()
    email?: string

    @Field(() => String, { nullable: true })
    name?: string
}
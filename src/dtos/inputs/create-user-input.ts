import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateUserInput{
    @Field()
    username: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    name: string
}
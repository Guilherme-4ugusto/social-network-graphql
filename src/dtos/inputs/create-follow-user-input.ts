import { InputType, Field, Int } from "type-graphql"
import { Min } from "class-validator"

@InputType()
export class CreateFollowUserInput {
  @Field()
  @Min(1)
  followerId: number

  @Field()
  @Min(1)
  followedId: number
}
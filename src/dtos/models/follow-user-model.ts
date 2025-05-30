import { ObjectType, Field, Int } from "type-graphql"
import { User } from "./user-model"

@ObjectType()
export class Follow {
  @Field(() => Int)
  followerId: number

  @Field(() => Int)
  followedId: number

  @Field(() => User)
  follower?: User

  @Field(() => User)
  followed?: User

  @Field()
  createdAt: Date
}
import { Resolver, FieldResolver, Root, Int } from "type-graphql";
import { User } from "../dtos/models/user-model";

@Resolver(of => User)
export class UserFieldResolver {
  @FieldResolver(() => Int)
  followersCount(@Root() user: User & { _count?: { followers?: number } }): number {
    return user._count?.followers ?? 0;
  }

  @FieldResolver(() => Int)
  followingCount(@Root() user: User & { _count?: { following?: number } }): number {
    return user._count?.following ?? 0;
  }
}
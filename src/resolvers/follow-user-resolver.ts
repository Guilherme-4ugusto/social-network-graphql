import { Arg, Mutation, Query } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { User } from "../dtos/models/user-model";
import { Follow } from "../dtos/models/follow-user-model";
import { CreateFollowUserInput } from "../dtos/inputs/create-follow-user-input";
import { UserCannotFollowHimselfError } from "../errors/user-cannot-follow-himself-error";

export const prisma = new PrismaClient();

export class FollowUserResolver {
    @Query(() => [Follow])
    async follow(): Promise<Follow[]> {
        return prisma.follow.findMany({
            include: {
                followed: true,
                follower: true
            }
        })
    }

    @Mutation(() => Follow)
    async createFollow(@Arg("data") data: CreateFollowUserInput): Promise<Follow> {
        if (data.followedId === data.followerId) {
            throw new UserCannotFollowHimselfError("USER_CANNOT_FOLLOW_HIMSELF")
        }
        return prisma.follow.create({
            data,
            include: {
                followed: true,
                follower: true
            }
        });
    }

    @Mutation(() => String)
    async unfollow(@Arg("followerId") followerId: number, @Arg("followedId") followedId: number) {
        await prisma.follow.delete({
            where: {
                followerId_followedId: {
                    followerId: followerId,
                    followedId: followedId
                }
            }
        })
        return `User ${followerId} unfollowed user ${followedId}`
    }
}
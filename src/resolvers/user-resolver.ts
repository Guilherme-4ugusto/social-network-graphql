import { Arg, Mutation, Query } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { User } from "../dtos/models/user-model";
import { UpdateUserInput } from "../dtos/inputs/update-user-input";

export const prisma = new PrismaClient();

export class UserResolver {
    @Query(() => [User])
    async users(@Arg("active", () => Boolean, { nullable: true }) active?: boolean): Promise<User[]> {
        let where = {};
        if (active === true) {
            where = { disabledAt: null };
        } else if (active === false) {
            where = { disabledAt: { not: null } };
        }
        return prisma.user.findMany({
            where,
            include: {
                _count: {
                    select: {
                        followers: true,
                        following: true
                    }
                },
                followers: {
                    include: {
                        follower: true
                    }
                },
                following: {
                    include: {
                        followed: true
                    }
                }
            }
        })
    }

    @Query(() => User, { nullable: true })
    async user(@Arg("userId") userId: number): Promise<User | null> {
        return prisma.user.findUnique({
            include: {
                _count: {
                    select: {
                        followers: true,
                        following: true,
                    },
                },
                followers: {
                    include: {
                        follower: true
                    }
                },
                following: {
                    include: {
                        followed: true
                    }
                }
            },
            where: {
                id: userId
            }
        })
    }

    @Mutation(() => User)
    async createUser(@Arg("data") data: CreateUserInput): Promise<User> {
        return prisma.user.create({
            data,
            include: {
                _count: {
                    select: {
                        followers: true,
                        following: true,
                    },
                },
                followers: {
                    include: {
                        follower: true
                    }
                },
                following: {
                    include: {
                        followed: true
                    }
                }
            }
        });
    }


    @Mutation(() => User)
    async updateUser(@Arg("userId") userId: number, @Arg("data") data: UpdateUserInput): Promise<User> {
        return prisma.user.update({
            where: {
                id: userId
            },
            data: data,
            include: {
                _count: {
                    select: {
                        followers: true,
                        following: true,
                    },
                },
                followers: {
                    include: {
                        follower: true
                    }
                },
                following: {
                    include: {
                        followed: true
                    }
                }
            }
        })
    }

    @Mutation(() => String)
    async desactivateUser(@Arg("userId") userId: number) {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                disabledAt: new Date()
            }
        })
        return `O usuário ${userId} foi desativado`
    }
}
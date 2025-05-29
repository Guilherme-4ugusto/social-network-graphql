import { Query } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { Post } from "../dtos/models/post-model";

export const prisma = new PrismaClient();

export class PostResolver {
    @Query(() => [Post])
    async posts(): Promise<Post[]> {
        return prisma.post.findMany({
            include: {
                creator: true,
            }
        })
    }

}
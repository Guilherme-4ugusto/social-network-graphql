import { Arg, Mutation, Query } from "type-graphql";
import { PostComment, PrismaClient } from "@prisma/client";
import { Post } from "../dtos/models/post-model";
import { CreatePostInput } from "../dtos/inputs/create-post-input";
import { PostCommentInput } from "../dtos/inputs/create-post-comment-input";

export const prisma = new PrismaClient();

export class PostResolver {
    @Query(() => [Post])
    async posts(): Promise<Post[]> {
        return prisma.post.findMany({
            include: {
                creator: true,
                postImage: true,
                postComment: {
                    include: {
                        author: true
                    }
                }
            }
        })
    }

    @Mutation(() => Post)
    async createPost(@Arg("data") data: CreatePostInput): Promise<Post> {
        return await prisma.post.create({
            data: {
                caption: data.caption,
                creatorId: data.creatorId,
                postImage: {
                    create: data.imagesUrls
                }
            },
            include: {
                creator: true
            }
        });
    }

    @Mutation(() => String)
    async archivePost(@Arg("postId") postId: number) {
        await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                archivedAt: new Date()
            }
        })
        return `The post ${postId} has been archived`
    }

    @Mutation(() => String)
    async unarchivePost(@Arg("postId") postId: number) {
        await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                archivedAt: null
            }
        })
        return `The post ${postId} has been unarchive`
    }

    @Mutation(() => String)
    async deletePost(@Arg("postId") postId: number) {
        await prisma.post.delete({
            where: {
                id: postId
            }
        })
        return `The post ${postId} has been deleted`
    }

    @Mutation(() => String)
    async addCommentToPost(@Arg("data") data: PostCommentInput) {
        await prisma.postComment.create({
            data
        })
        return `Comment was created`
    }
}
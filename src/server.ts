import "reflect-metadata";

import path from 'node:path'

import { ApolloServer } from '@apollo/server';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user-resolver";
import { FollowUserResolver } from "./resolvers/follow-user-resolver";
import { UserFieldResolver } from "./resolvers/user-field-resolver ";
import { startStandaloneServer } from '@apollo/server/standalone';
import { PostResolver } from "./resolvers/post-resolver";


require("dotenv").config();

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver, FollowUserResolver, UserFieldResolver, PostResolver
        ],
        validate: true,
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({ schema })

    const { url } = await startStandaloneServer(server, {
        listen: { port: Number(process.env.APP_PORT) }
    });

    console.log(`🚀 HTTP Server Running on ${url}`)
}

bootstrap();
import "reflect-metadata";

import path from 'node:path'

import { ApolloServer } from '@apollo/server';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user-resolver";
import { FollowUserResolver } from "./resolvers/follow-user-resolver";
import { UserFieldResolver } from "./resolvers/user-field-resolver ";
import { startStandaloneServer } from '@apollo/server/standalone';

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver, FollowUserResolver, UserFieldResolver
        ],
        validate: true,
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema
    })

    const { url } = await startStandaloneServer(server, {listen: { port: 4000 }});
    console.log( `🚀 HTTP Server Running on ${url}`)
}

bootstrap()
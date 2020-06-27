import { ApolloServer } from 'apollo-server-lambda';
import { schema } from './schema/schema';
import { resolvers } from './resolvers/resolver';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    },
    // formatResponse: response => {
    //     console.log(response);
    //     return response;
    // },
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
    }),
    playground: {
        endpoint: '/graphql',
    },
    // tracing: true,
});

exports.graphqlHandler = server.createHandler();
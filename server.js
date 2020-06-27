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
    formatResponse: response => {
        console.log(response);
        return response;
    },
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

// exports.graphqlHandler = server.createHandler();
exports.graphqlHandler = function (event, context, callback) {
    const callbackFilter = function (error, output) {
        output.headers['Access-Control-Allow-Origin'] = '*';
        callback(error, output);
    };
    server.createHandler()(event, context, callbackFilter);
};
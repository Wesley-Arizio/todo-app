import setUpServer from './server';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

setUpServer({typeDefs, resolvers})
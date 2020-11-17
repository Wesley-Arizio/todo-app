import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function setUpServer({typeDefs, resolvers}){
    mongoose.connect('mongodb://localhost:27017/todo-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const server = new ApolloServer({typeDefs, resolvers});

    server
        .listen()
        .then(({ url }) => {
            console.log(`🔥 Server is running in this url: ${url}`)
        });
}

export default setUpServer;
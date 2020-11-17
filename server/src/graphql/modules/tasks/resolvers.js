import Task from '../../../models/Tasks';

export default {
    Query: {
        tasks: async () => {
            return await Task.find();
        },
        task: async (_, { id }) => {
            return await Task.findById(id);
        }
    },
    Mutation: {
        createTask: async (_, { data }) => {
            return await Task.create(data);
        },

        updateTask: async (_, {id, data}) => {
            return Task.findOneAndUpdate(id, data, {new: true});
        },

        deleteTask: async (_, { id }) => {
            return !!(await Task.findByIdAndDelete(id))
        }
    }
};
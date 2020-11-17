import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: mongoose.Schema.Types.Mixed, // Doing, To Do, Done
        required: false
    }
});

export default mongoose.model("Tasks", Schema);
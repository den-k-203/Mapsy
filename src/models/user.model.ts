import {Schema, model} from "mongoose";

const User: Schema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    login: {
        type: String,
        require: true,
        unique: true
    },
    firstName: {
        type: String,
        require: true
    },
    secondName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        ref: "Role"
    }
});

export default model("User", User);
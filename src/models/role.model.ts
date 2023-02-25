import {Schema, model} from "mongoose"

const Role: Schema = new Schema({
    value:{
        type: String,
        require: true,
        unique: true,
        default: 'USER'
    }
})

export default model('Role', Role)
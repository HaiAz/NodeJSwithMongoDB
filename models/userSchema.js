import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    // String is shorthand for {type: String}
    //shorthand
    name: String,
    //full
    age: {
        type: String,
    },
    description: {
        type: String,
    },
    number: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);
export default User;

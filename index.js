import express, { urlencoded } from "express";
import mongoose from "mongoose";
import userModel from "./models/userSchema.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//tạo cổng kết nối
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/nodejs");
        console.log("connecting to MongoDB...");
    } catch (err) {
        console.log(err);
    }
}

main();

//tạo đường dẫn cho user
app.use("/user", userRouter);

//test server
app.get("/", (req, res) => {
    const user = userModel.find();
    return res.send("123");
});

app.listen(3001, () => {
    console.log("server is running at port 3001");
});

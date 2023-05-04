import userModel from "../models/userSchema.js";

const userController = {
    //lấy toàn bộ user
    getAllUser: async (_, res) => {
        const allUser = await userModel.find({});
        return res.send(allUser);
    },
    //tạo user mới
    createUser: async (req, res) => {
        const { name, age, description, number } = req.body;
        try {
            await userModel.create({ name, age, description, number });
            res.status(200).send("Tạo thành công user");
        } catch (err) {
            res.status(500).send("error");
        }
    },
    //xóa user
    deleteUser: async (req, res) => {
        const { _id } = req.params;
        try {
            await userModel.deleteOne({ _id });
            res.status(200).send("Xóa thành công.");
        } catch (err) {
            res.status(404).send("k tìm thấy user");
        }
    },
};

export default userController;

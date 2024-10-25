const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const generateToken = require("../config/generateToken");


const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, pic} = req.body;
    if(!name || !email || !password) {
        resizeBy.status(400);
        throw new Error("Bạn chưa nhập đủ thông tin");
    }

    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400);
        throw new Error("Người dùng đã tồn tại");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    })

    if(user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Tạo tài khoản không thành công");
    }
});

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error("Tài khoản hoặc mật khẩu không chính xác");
    }
});


module.exports = { registerUser, authUser }


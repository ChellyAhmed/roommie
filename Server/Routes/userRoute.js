const express = require("express");
const userRoute = express.Router();
const {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getOneUser,
} = require("../Controllers/userController");
userRoute.get("/users", getUsers);
userRoute.post("/user/login", getOneUser);
userRoute.post("/user", postUser);
module.exports = userRoute;

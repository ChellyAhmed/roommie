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
userRoute.get("/user/:id", getOneUser);
userRoute.post("/user", postUser);
userRoute.put("/user/:id", putUser);
userRoute.delete("/user/:id", deleteUser);
module.exports = userRoute;

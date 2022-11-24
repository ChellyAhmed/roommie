// "dev": "nodemon index.js"  in package.json //now run npm run dev and it will start the server

const express = require("express");
const app = express();

const port = 3300;
app.listen(port, (err) => {
    err
        ? console.log("server failed")
        : console.log(`server is running on port ${port}`);
});

app.use(express.json());
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Elyes" },
    { id: 4, name: "Ahmed" },
    { id: 5, name: "Hana" },
];
//Read all
app.get("/users", (req, res) => {
    res.status(200).json({ users: users });
});
app.get("/users/:id/:age", (req, res) => {
    const userId = req.params.id;
    const userAge = req.params.age;
    let foundUser = users.find((user) => user.id == userId);
    if (foundUser) {
        foundUser = { ...foundUser, age: userAge }
        res.status(200).json({ user: foundUser });
    }
    else {
        res.status(404).json({ message: "User not found" });
    }
});
//Read by ID
app.get("/users/:id/", (req, res) => {
    const userId = req.params.id;
    const foundUser = users.find((user) => user.id == userId);
    if (foundUser) {
        res.status(200).json({ user: foundUser });
    }
    else {
        res.status(404).json({ message: "User not found" });
    }
});

app.get("/ahmed", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});
//CREATE OPERATION
app.post("/users/add", (req, res) => {
    const user = req.body;
    const newTable = [...users, user];
    res
        .status(200)
        .json({ message: "your user is sucessfully added", users: newTable });
        
    })
    //UPDATE OPERATION
    app.put("/users/:id", (req, res) => {
        const userId = req.params.id;
        const updatedUser = req.body;
        const { id, name } = updatedUser;
        const newUsers = users.map((elt) => {
            if (elt.id == userId) {
                return { ...elt, name };
            } else {
                return elt;
            }
        });
        res.status(200).json({ newUsers: newUsers });
    })
    //DELETE OPERATION
    app.delete("/users/:id" , (req , res) => {
        const userId = req.params.id ;
        const newTable = users.map( (elt) => {
            if (elt.id != userId){
                return elt;
            }
        } )
        res
            .status(200)
            .json({ message: "your user is sucessfully added", users: newTable });
    })
    

// "dev": "nodemon index.js"  in package.json //now run npm run dev and it will start the server
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT; //.env file in the project directory


//cors for security reasons
const cors = require("cors");
var corsOptions = {
    origin: "*" ,
};

app.use(cors(corsOptions));



app.use(express.json());
const userRoute = require("./routes/UserRoute");
console.log(port);
app.listen(port, (er) => {
    if (er) {
        console.log(err);
    } else {
        console.log(`server is listening on port ${port}`);
    }
});
app.use("/api", userRoute);

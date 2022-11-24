const { connection } = require("../connection");

const getUsers = async (req, res) => {
    connection.query('SELECT * from User', (err, rows, fields) => {
        if (err) throw err
        res.status(200).json({ users: rows });
    })

}
const getOneUser = async (req, res) => {
    const id = req.params.id;
    const founUser = users.find((user) => user.id == id);
    if (founUser) {
        res.status(200).json({ user: founUser });
    } else {
        res.status(400).json({ msg: "no user found" });
    }
};



const postUser = async (req, res) => {
    let user = req.body;
    connection.query(`insert into User
    (fullName, password, email, gender, school, about, phoneNumber, budget, drinking, smoking, visitsFrequency, loudness)
    values
    ("${user.fullName}", "${user.password}", "${user.email}", "${user.gender}", "${user.school}", "${user.about}", "${user.phoneNumber}", ${user.budget}, ${user.drinking}, ${user.smoking}, ${user.visitsFrequency}, ${user.loudness} );`, (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).json({ message: "User successfully added"});
        }
    })
};
const putUser = async (req, res) => {
    console.log("put user");
};
const deleteUser = async (req, res) => {
    console.log("delete user");
};
module.exports = { getUsers, postUser, putUser, deleteUser, getOneUser }
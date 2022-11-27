const { connection } = require("../connection");

const getUsers = async (req, res) => {
    connection.query('SELECT * from User', (err, rows, fields) => {
        if (err) throw err
        res.status(200).json({ users: rows });
    })

}
const getOneUser = async (req, res) => {
    let user = req.body;
    connection.query(`select * from User left join Announcement on User.userID = Announcement.refUserID where ((password="${user.password}") and  (email="${user.email}"));`, (err, rows, fields) => {
        if (err || rows.length != 1) {
            console.log(err);
            res.status(400).json({ message: "User not found"});
        }
        else {
            console.log("User Found");
            res.status(200).json({ user: rows[0]});
        }
    })
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
module.exports = { getUsers, postUser, getOneUser }
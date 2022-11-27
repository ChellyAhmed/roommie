const { connection } = require("../connection");

const getAnnouncements = async (req, res) => {
    connection.query('SELECT * from Announcement inner join User on User.userID = Announcement.refUserID', (err, rows, fields) => {
        if (err) throw err
        res.status(200).json({ announcements: rows });
    })
}
const postAnnouncement = async (req, res) => {
    let announcement = req.body;
    if (announcement.houseDescription != "") {

        connection.query(`INSERT INTO Announcement (location, houseDescription, refUserID) Values ("${announcement.location}" ,"${announcement.houseDescription}", ${announcement.refUserID} )`, (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({ announcementID: rows.insertId });
        })
    }
    else {
        connection.query(`INSERT INTO Announcement (location, refUserID) Values ("${announcement.location}" , ${announcement.refUserID} )`, (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({ announcementID: rows.insertId });
        })

    }
}


const getAnnouncementsFiltered = async (req, res) => {
    let school = req.params.school;
    let gender = req.params.gender;
    let budget = req.params.budget;
    let house = req.params.house;
    if (school =="both") {
        school = "%";
    }
    if (gender =="both") {
        gender = "%";
    }
    if (house == "yes") {
         connection.query(`SELECT * from Announcement inner join User on User.userID = Announcement.refUserID where school like  "${school}" and gender like "${gender}" and budget <= ${budget} and houseDescription IS NOT NULL`, (err, rows, fields) => {
            if (err) throw err
            
            res.status(200).json({ announcements: rows });
        })       
    }
    else if (house == "no") {
        connection.query(`SELECT * from Announcement inner join User on User.userID = Announcement.refUserID where school like  "${school}" and gender like "${gender}" and budget <= ${budget} and houseDescription IS NULL`, (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({ announcements: rows });
        })       

    }
    else {
        connection.query(`SELECT * from Announcement inner join User on User.userID = Announcement.refUserID where school like  "${school}" and gender like "${gender}" and budget <= ${budget}`, (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({ announcements: rows });
        })
    }
}

module.exports = { getAnnouncements, getAnnouncementsFiltered, postAnnouncement }
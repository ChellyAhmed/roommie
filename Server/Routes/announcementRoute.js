const express = require("express");
const announcementRoute = express.Router();
const {
    getAnnouncements,
    getAnnouncementsFiltered,
    postAnnouncement,
} = require("../Controllers/announcementController");
announcementRoute.get("/announcements", getAnnouncements);
announcementRoute.get("/announcements/:school/:gender/:budget/:house", getAnnouncementsFiltered);
announcementRoute.post("/announcements/add" , postAnnouncement);
module.exports = announcementRoute;

const express = require("express");
const announcementRoute = express.Router();
const {
    getAnnouncements,
    getAnnouncementsFiltered,
    postAnnouncement,
    getAnnouncementByID,
    updateAnnouncement,
    deleteAnnouncement
} = require("../Controllers/announcementController");
announcementRoute.get("/announcements", getAnnouncements);
announcementRoute.get("/announcements/:school/:gender/:budget/:house", getAnnouncementsFiltered);
announcementRoute.get("/announcement/:id", getAnnouncementByID);
announcementRoute.post("/announcementUpdate", updateAnnouncement);
announcementRoute.post("/announcements/add" , postAnnouncement);
announcementRoute.post("/announcementDelete" , deleteAnnouncement);
module.exports = announcementRoute;

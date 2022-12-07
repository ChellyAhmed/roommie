create database roommie;
use roommie;
CREATE TABLE User (
    userID INT NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL,
    email VARCHAR(55) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    school VARCHAR(7) NOT NULL,
    about TEXT NOT NULL,
    phoneNumber VARCHAR(13) NOT NULL,
    budget INT NOT NULL,
    drinking INT,
    smoking INT,
    visitsFrequency INT,
    loudness INT,
    CHECK (gender IN ('male' , 'female')
        AND school IN ('MSB' , 'Medtech')
        AND drinking IN (0 , 1)
        AND smoking IN (0 , 1)
        AND visitsFrequency IN (1 , 2, 3, 4, 5, NULL)
        AND loudness IN (1 , 2, 3, 4, 5, NULL)),
    CONSTRAINT UserPK PRIMARY KEY (userID)
);

CREATE TABLE Announcement (
    announcementID INT NOT NULL AUTO_INCREMENT,
    location VARCHAR(250) NOT NULL,
    houseDescription TEXT,
    refUserID INT NOT NULL,
    CONSTRAINT AnnouncementFK FOREIGN KEY (refUserID)
        REFERENCES User (userID),
    CONSTRAINT AnnouncementPK PRIMARY KEY (announcementID, refUserID)
);
 
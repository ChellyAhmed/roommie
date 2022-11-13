function EditAnnouncement() {
    const announcement = { announcementID: 3, fullName: "John Doe", email: "John.doe@smu.tn", gender: "female", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 1, smoking: 1, visitsFrequency: 5, loudness: 4, location: "Lac2", houseDescription: "Appartment S+2 Lac 2. All commodities included and well furnished. 3-min walk away from uni" };
    return (<>
        <h1 className="page-title">Edit Announcement</h1>
        <div className="box" >
            <form>
                {/* Location */}
                <label className="form-label">Location:</label>
                <input type="text" className="form-control" placeholder="house address" value={announcement.location} />
                {/* House description */}
                <label className="form-label">House description:</label>
                <textarea  style={{ width: "100%" }}>{announcement.houseDescription}</textarea>

                <div className="buttons-container">
                    <button className="btn btn-primary" >Save</button>
                    <button className="btn btn-secondary" >Cancel</button>
                </div>
            </form>
        </div>
    </>);
}
export default EditAnnouncement;
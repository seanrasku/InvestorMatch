import React from "react";


const EditAccountForm = ({
    editItem,
    oldName,
    name,
    setName,
    //profilePic,
    setProfilePic,
    phone,
    setPhone,
    location,
    setLocation,
    bio,
    setBio,
    links,
    setLinks,

  }) => (
    <form onSubmit={editItem} 

          encType="multipart/form-data"
          action="/profile"
          method="post"
          style={{
            backgroundColor: "#BED2DD",
            fontFamily: "sans-serif",
            padding: "20px",
            borderRadius: "10px"}}>
        <div className="col-md-8">
            <div className="mb-3">
                <div className="card-body">
                  <div className="row">
                    <label className="form-label">Name / Venture Name</label>
                    <div className="col-sm-9 mb-5">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder={oldName}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <label className="form-label">Profile Picture</label>
                    <div className="col-sm-9 mb-5">
                        <input  //edit profile pic
                            type="file"
                            className="form-control"
                            //placeholder= "profile picture"
                            //label = "Image"
                            accept=".jpeg, .png, .jpg"
                            //files = {profilePic}
                            onChange={(e) => setProfilePic(e.target.files[0])}
                            />
                            
                
                    </div>
                    <label className="form-label">Phone Number</label>
                    <div className="col-sm-9 mb-5">
                        <input  //edit phone
                            type="text"
                            className="form-control"
                            placeholder= "phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <label className="form-label">Location / Address</label>
                    <div className="col-sm-9 mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder= "Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <label className="form-label">Bio</label>
                    <div className="col-sm-9 mb-5">
                        <textarea
                            className="form-control"
                            placeholder= "Bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <label className="form-label">Links</label>
                    <div className="col-sm-9 mb-5">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder= "Links"
                            value={links}
                            onChange={(e) => setLinks(e.target.value)}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-primary">
            Submit
        </button>
    </form>
  );

  export default EditAccountForm;
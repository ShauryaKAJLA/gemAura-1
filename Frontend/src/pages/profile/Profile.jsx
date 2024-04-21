import React, { useEffect, useState } from "react";
const Profile = () => {
  const [UserData, setUserData] = useState({
    name: "Shaurya kajka",
    Male: "shauryakajla@gmail.com",
    Password: 5,
    address: "",
    phone: 8847542649,
  });
  return (
    <div>
      <div>
        <div>UserName: </div>
        <div>{UserData.name}</div>
      </div>
      <div>
        <div>Phone Number: </div>
        <div>{UserData.phone}</div>
      </div>
      <div>
        <div>Mail: </div>
        <div>{UserData.Male}</div>
      </div>
      <div>
        <div>Password: </div>
        <div>{}</div>
      </div>
      <div>
        <div>Address: </div>
        <div>{UserData.address}</div>
      </div>
    </div>
  );
};

export default Profile;

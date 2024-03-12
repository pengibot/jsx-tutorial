import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;

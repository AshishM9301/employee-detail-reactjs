import React from "react";

const UserCard = ({ user_id, name, password, key }) => {
  return (
    <div className="flex justify-center ml-6 p-4 mt-6 w-96" key={key}>
      <div className="rounded-lg shadow-lg bg-white w-full">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-4">User ID : {user_id}</p>
          <p className="text-gray-700 text-base mb-4">Password: {password}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

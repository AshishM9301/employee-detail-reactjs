import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("https://retoolapi.dev/B13laa/getusers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...data]);
        setLoading(false);
        console.log(users);
      });
  };

  if (Loading) return <Loader />;

  return (
    <div>
      <div className="text-5xl flex justify-center mt-9">All Users</div>
      <div className="flex flex-wrap justify-center">
        {users.map((user) =>
          user?.user_id ? (
            <UserCard
              key={user.id}
              user_id={user.user_id}
              name={user.name}
              password={user.password}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Users;

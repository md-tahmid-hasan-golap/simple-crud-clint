import React, { use, useState } from "react";

const Users = ({ userPromisd }) => {
  const loadedUserData = use(userPromisd);
  //   console.log(loadedUserData);
  const [users, setUsers] = useState(loadedUserData);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    //creat user in the data base
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser]; // ✅ ঠিক করা
          setUsers(newUsers);
          alert("user added successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      {/* add user */}
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="add user" />
        </form>
      </div>
      {/* view user */}
      <div>
        {users.map((user) => (
          <p key={user._id}>
            Name: {user.name} ,Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;

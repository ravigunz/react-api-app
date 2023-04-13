import React, { useEffect, useState } from "react";

export default function UsersLayout() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "left"}}>Members</h2>
      {isLoading === true ? (
        <div>
          <h2>Loading......</h2>
        </div>
      ) : users.length > 0 ? (
        users.map((val, key) => {
          return (
            <div key={key}>
              <p style={{textAlign: 'left'}}>{val.name}</p>
            </div>
          );
        })
      ) : (
        <h2> No users found!</h2>
      )}
    </div>
  );
}

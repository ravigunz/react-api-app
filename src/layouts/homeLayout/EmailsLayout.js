import React, { useEffect, useState } from "react";

export default function UsersLayout() {
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setEmails(data);
        setIsLoading(false);
      });
  });

  return (
    <div>
      <h2 style={{ textAlign: "left"}}>Emails</h2>
      {isLoading === true ? (
        <div>
          <h2>Loading......</h2>
        </div>
      ) : emails.length > 0 ? (
        emails.map((val, key) => {
          return (
            <div key={key}>
              <p style={{textAlign: 'left'}}>{val.email}</p>
            </div>
          );
        })
      ) : (
        <h2>No emails found!</h2>
      )}
    </div>
  );
}

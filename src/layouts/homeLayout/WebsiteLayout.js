import React, { useEffect, useState } from "react";

export default function WebsiteLayout() {
  const [website, setWebsite] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setWebsite(data);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Website</h2>
      {website.map((val, key) => {
        return (
          <div key={key}>
            <p>{val.website}</p>
          </div>
        );
      })}
    </div>
  );
}

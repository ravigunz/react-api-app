import React, { useEffect, useState } from "react";

export default function IdLayouts() {
  const [id, setId] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setId(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>ID</h2>
      {id.map((val, key) => {
        return (
          <div key={key}>
            <p>{val.id}</p>
          </div>
        );
      })}
    </div>
  );
}

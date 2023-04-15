import React, { useEffect, useState } from "react";

export default function AddressLayout() {
  const [address, setAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setAddress(data);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Address</h2>
      {isLoading === true ? (
        <div>
          <h2>Loading.....</h2>
        </div>
      ) : address.length > 0 ? (
        address.map((val, key) => {
          return (
            <div key={key}>
              <p style={{ textAlign: "left" }}>
                {val.address.street + ", "}
                {val.address.suite + ", "}
                {val.address.city + ", "}
                {val.address.zipcode + ", (Geo: Lat- "}
                {val.address.geo.lat + ", "}
                {val.address.geo.lng + ")"}
              </p>
            </div>
          );
        })
      ) : (
        <h2>No Address found!</h2>
      )}
    </div>
  );
}

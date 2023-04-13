import React, { useEffect, useState } from 'react'

export default function PhoneLayout() {
    const [phone, setPhone] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
            setPhone(data);
            setIsLoading(false);
        }).catch(() => {});
    }, []);

  return (
    <div>
        <h2 style={{ textAlign: "left"}}>Phone</h2>
        {isLoading === true ? (
            <div>
<h2>Loading.....</h2>
                </div>
        ) : phone.length > 0 ? 
        (phone.map((val, key) => {
            return (
                <div key={key}>
                    <p style={{textAlign: 'left'}}>{val.phone}</p>
                </div>
            );
        })
        ) : (
            <h2>No phone number found!</h2>
        )}
    </div>
  );
}

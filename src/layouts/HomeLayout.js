import React, { useEffect, useState } from "react";
import UsersLayout from "./homeLayout/UsersLayout";
import EmailsLayout from "./homeLayout/EmailsLayout";
import AddressLayout from "./homeLayout/AddressLayout";
import PhoneLayout from "./homeLayout/PhoneLayout";
import IdLayouts from "./homeLayout/IdLayouts";
import WebsiteLayout from "./homeLayout/WebsiteLayout";

export default function HomeLayout() {
  return (
    <div style={{ margin: "20px", display: 'flex', }}>
      <div style={{ marginRight: "5px"}}>
        <IdLayouts />
      </div>
      <div style={{ marginRight: "5px"}}>
      <EmailsLayout />
      </div>
      <div style={{ marginRight: "10px"}}>
      <UsersLayout />
      </div>
      <div style={{ marginRight: "10px"}}>
      <AddressLayout />
      </div>
      <div style={{ marginRight: "10px"}}>
      <PhoneLayout />
      </div>
      <div style={{ marginRight: "10px"}}>
      <WebsiteLayout />
      </div>
    </div>
  );
}

import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money, save sanity!</h1>
      <span className="mailDesc">
        Sign up we'll send the exclusive deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" className="mailInput" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;

import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const {id, userId, name, email, contactNumber } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
          <div className="header">User ID:  {userId}</div>
          <div>Name:  {name}</div>
          <div>Email:  {email}</div>
          <div>Contact Number:   {contactNumber}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <button className="ui button yellow push">
          Edit
        </button>
      </Link>
      <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
        <button className="ui button green push">
          View
        </button>
      </Link>
    </div>
  );
};

export default ContactCard;

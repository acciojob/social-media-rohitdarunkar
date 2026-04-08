import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>GenZ</h1>

      <div className="nav-links">
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </div>
  );
}
import React from "react";
import { users } from "../data";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/posts/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React from "react";
import { users } from "../data";
import { Link } from "react-router-dom";

export default function SinglePost({ match, posts }) {
  const post = posts.find(p => p.id === Number(match.params.id));

  if (!post) return <p>Post not found</p>;

  const user = users.find(u => u.id === post.userId);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>by {user?.name}</p>
      <p>{post.content}</p>

      {Object.entries(post.reactions).map(([k, v]) => (
        <button key={k}>{k} {v}</button>
      ))}

      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </div>
  );
}
import React, { useState } from "react";
import { users } from "../data";
import { Link } from "react-router-dom";

export default function PostsList({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const addPost = () => {
    if (!title || !content || !author) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      userId: Number(author),
      reactions: { "👍": 0, "🎉": 0, "❤️": 0, "🚀": 0, "👀": 0 }
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const react = (id, emoji) => {
    if (emoji === "👀") return;

    setPosts(
      posts.map(p =>
        p.id === id
          ? {
              ...p,
              reactions: {
                ...p.reactions,
                [emoji]: p.reactions[emoji] + 1
              }
            }
          : p
      )
    );
  };

  return (
    <div className="posts-list">
      <div>
        <h2>Add a New Post</h2>

        <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />

        <select id="postAuthor" onChange={e => setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          {users.map(u => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>

        <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />

        <button onClick={addPost}>Save Post</button>
      </div>

      {posts.map(post => {
        const user = users.find(u => u.id === post.userId);

        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>by {user?.name}</p>
            <p>{post.content}</p>

            {Object.keys(post.reactions).map(r => (
              <button key={r} onClick={() => react(post.id, r)}>
                {r} {post.reactions[r]}
              </button>
            ))}

            <Link to={`/posts/${post.id}`} className="button">
              View Post
            </Link>
          </div>
        );
      })}
    </div>
  );
}
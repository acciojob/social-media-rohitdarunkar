import React, { useState } from "react";

export default function EditPost({ match, history, posts, setPosts }) {
  const post = posts.find(p => p.id === Number(match.params.id));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const save = () => {
    setPosts(posts.map(p =>
      p.id === post.id ? { ...p, title, content } : p
    ));

    history.push(`/posts/${post.id}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>

      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />

      <button onClick={save}>Save Post</button>
    </div>
  );
}
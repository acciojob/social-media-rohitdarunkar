import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import Users from "./components/Users";
import Notifications from "./components/Notifications";
import SinglePost from "./components/SinglePost";
import EditPost from "./components/EditPost";
import { initialPosts } from "./data";
import "./styles/App.css";

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostsList posts={posts} setPosts={setPosts} />}
          />

          <Route path="/users" component={Users} />
          <Route path="/notifications" component={Notifications} />

          <Route
            path="/posts/:id"
            render={(props) => <SinglePost {...props} posts={posts} />}
          />

          <Route
            path="/editPost/:id"
            render={(props) => (
              <EditPost {...props} posts={posts} setPosts={setPosts} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
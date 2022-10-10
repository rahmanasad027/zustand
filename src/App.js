import React, { useEffect } from "react";
import People from "./components/People";
import Input from "./components/Input";
import usePosts from "./stores/PostStore";

function App() {
  const { posts, fetch } = usePosts((state) => state);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <div className="App">
      <h1>Hi there</h1>
      <People />
      <Input />
      {posts.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}

export default App;

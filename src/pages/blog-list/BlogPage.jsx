import React, { useState } from "react";
import "./BlogPage.css";
import Navbar from "../../components/nav-bar/Navbar";

function BlogPage() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="blog-page">
      <Navbar />
      <div className="content">
        <div className="home">
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

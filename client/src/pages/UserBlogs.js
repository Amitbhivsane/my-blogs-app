import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../component/BlogCard";
const UserBlogs = () => {
  const [blogs, setblogs] = useState([]);
  //get single user all blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setblogs(data?.userBlog.blogs);
        // data?.userBlog //userBLog backend data name
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs, "user");
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1> You Havent Created BLog</h1>
      )}
    </div>
  );
};

export default UserBlogs;

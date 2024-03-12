import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../component/BlogCard";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // get all blogs
  const getallBLogs = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/all-blog`);
      if (data?.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogs);

  useEffect(() => {
    getallBLogs();
  }, []);
  return (
    <>
      <div>
        {blogs &&
          blogs.map((blog, index) => (
            <BlogCard
              id={blog?._id}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              key={index}
              title={blog?.title}
              description={blog?.description}
              image={blog?.image}
              username={blog?.user?.username}
              time={blog.createdAt}
            />
          ))}
      </div>
    </>
  );
};

export default Blog;

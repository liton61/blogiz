import { Blog } from "@/types";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="lg:px-10 px-5">
      <h1 className="text-3xl font-bold text-center mt-10">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center mt-3 italic">
        Dive into the fascinating world of quantum computing, where unlocking{" "}
        <br />
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-16">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;

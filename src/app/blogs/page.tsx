"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  return (
    <div className="lg:px-10 px-5">
      <h1 className="text-3xl font-bold text-center mt-10">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center mt-3 italic">
        Dive into the fascinating world of quantum computing, where unlocking
        <br />
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";
import React from "react";

interface BlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const Page = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">Blog Details</h1>
      <div className="my-16">
        <BlogDetails blog={blog} />
      </div>
    </div>
  );
};

export default Page;

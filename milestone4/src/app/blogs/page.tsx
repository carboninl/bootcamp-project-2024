import BlogPreview from "@/components/blogPreview";
import React from "react";
import style from "./blogs.module.css";
import connectDB from "@/database/db";
import BlogModel, { Blog } from "@/database/blogSchema";


async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return [];
  }
}

export default async function Home() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div>
      <h1 className="pageTitle">Blogs</h1>
      <div className={style.blogContainer}>
        {blogs.map((blog) => (
          <BlogPreview {...(blog as any)._doc} key={blog.title} />
        ))}
      </div>
    </div>
  );
}

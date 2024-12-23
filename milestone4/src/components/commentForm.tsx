"use client";
import { useState } from "react";
import style from "./commentForm.module.css";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      user,
      content,
    };

    fetch(`http://localhost:3000/api/blogs/${slug}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to submit comment");
        }
        return res.json();
      })
      .then((res) => {
        console.log("Comment submitted:", res);
        alert("Your comment has been added! (Refresh to view it)");
        setUser(""); // Clear the input fields
        setContent("");
      })
      .catch((err) => {
        console.error("Error submitting comment:", err);
        alert("Failed to add comment, please try again.");
      });
  };

  return (
    <div>
      <h1 className={style.title}>Leave a comment!</h1>
      <form onSubmit={handleSubmit} className={style.commentForm}>
        <label className={style.formLabel}>Name </label>
        <input
          type="text"
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className={style.formInput}
        ></input>
        <label className={style.formLabel}>Comment </label>
        <input
          type="text"
          name="comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className={style.formInput}
        ></input>
        <button type="submit" className={style.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

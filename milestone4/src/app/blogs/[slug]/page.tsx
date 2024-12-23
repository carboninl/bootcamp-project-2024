import { Blog } from "@/database/blogSchema";
import Image from "next/image";
import style from "./blog.module.css";
import Comment from "@/components/comment";
import CommentForm from "@/components/commentForm";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch {
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

type Params = Promise<{slug: string}>;

export default async function BlogScreen(props:{params: Params}) {
  const { slug } = await props.params;
	
	const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div>
        <h1 className="pageTitle">404 - Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="pageTitle">{blog.title}</h1>
      <Image
        className={style.blogImage}
        src={blog.image}
        alt={blog.imageAlt}
        width={500}
        height={500}
      />
      <div className={style.contentContainer}>
        <p className={style.blogContent}>{blog.content}</p>
      </div>
      <div className="blog-comments">
        {blog.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
		<CommentForm slug={slug}></CommentForm>

      </div>
    </div>
  );
}

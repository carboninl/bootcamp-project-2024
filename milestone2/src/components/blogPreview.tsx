import React from "react";
import style from "/../../blogPreview.module.css";
import { Blog } from "@/app/static/blogData";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div>
      <Link href={"/blogs/" + props.slug}>
        <h2> {props.title} </h2>
      </Link>
      <div>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
        ></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

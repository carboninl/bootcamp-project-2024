import React from "react";
import Image from "next/image";
import style from "../blogPages.module.css";

export default function AbroadInRome() {
  return (
    <div>
      <h1 className="pageTitle">Abroad in Rome</h1>
      <h2 className={style.pageDate}>10/15/2024</h2>
      <Image
        className={style.blogImage}
        src="/leaning-tower.jpg"
        alt="leaning tower of pisa"
        width={250}
        height={250}
      />
      <div className={style.contentContainer}>
        <p className={style.blogContent}>
          I am just a few days away from marking my first month abroad in Rome.
          I have been seeing so many cool sights, as well as learning software
          engineering and even a little Italian!
        </p>
      </div>
      <br></br>
    </div>
  );
}

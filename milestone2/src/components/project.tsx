import { Project } from "../database/projectSchema";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./project.module.css";

export default function ProjectComponent(props: Project) {
    return (
      <div className={style.project}>
        <Image
          className={style.projectImage}
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
        />
        <div className={style.projectDetails}>
          <p className={style.projectName}>
            <strong>{props.name}</strong>
          </p>
          <p className={style.projectDescription}>{props.description}</p>
          <Link href={props.url}>Learn More</Link>
        </div>
      </div>
    );
  }
  
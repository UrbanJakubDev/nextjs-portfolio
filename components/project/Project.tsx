import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type } from "os";

// Interface for the single project
interface Project {
  title: string;
  author: string;
  category: string;
  date: string;
  bannerImage: string;
  tags: string[];
}

type Props = {
  project: Project;
  slug: string;
};

const Project = (props: Props) => {
   const { project, slug } = props;
  const { title, author, category, date, bannerImage, tags } = project;

  return (
    <article className="project-card" key={title}>
      <img src="/as1.png" alt="banner" />
      <div className="content">
        <Link href={`/posts/${slug}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <div>{author}</div>
        <div>{date}</div>
      </div>
    </article>
  );
};

export default Project;

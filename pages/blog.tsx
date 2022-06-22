import React from 'react'
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
   posts: any
}

const Blog = (props: Props) => {

   const posts = props.posts.map((post: any) => {
         //extract slug and frontmatter
         const {slug, frontmatter} = post
         //extract frontmatter properties
         const {title, author, category, date, bannerImage, tags} = frontmatter

         //JSX for individual blog listing
         return <article key={title}>
             <Link href={`/posts/${slug}`}>
                 <h1>{title}</h1>
             </Link>
             <h3>{author}</h3>
             <h3>{date}</h3>
         </article>
     })


  return (
    <main>
      {
         posts
      }

    </main>
  )
}



//Generating the Static Props for the Blog Page
export async function getStaticProps(){
   // get list of files from the posts folder
   const files = fs.readdirSync('posts');

   // get frontmatter & slug from each post
   const posts = files.map((fileName) => {
       const slug = fileName.replace('.md', '');
       const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
       const { data: frontmatter } = matter(readFile);

       return {
         slug,
         frontmatter,
       };
   });

   // Return the pages static props
   return {
       props: {
         posts,
       },
   };
}

export default Blog;
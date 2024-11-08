import blogs from '@/app/static/blogData'
import BlogPreview from '@/components/blogPreview';
import React from 'react';
import style from './blogs.module.css'

export default function Home() {
    return (
        <div>
        <h1 className="pageTitle">Blogs</h1>
        <div className={style.blogContainer}>
            {blogs.map(blog =>
                <BlogPreview {...blog} key={blog.title} />
            )}
        </div>
        </div>
    );
}
"use client"

import Link from "next/link"
import { useState, useEffect } from "react";

interface Post {
    _id: string;
    title: string;
    body: string;
    thumbnail: string;
    comments: string[];
    timestamp: string;
    labels: string[];
    published: boolean;
  }

export default function Blog() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://my-blog-api-14aq.onrender.com/api/posts`);
  
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
  
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Error fetching blog posts:", error);
        }
      };
  
      fetchData();
    }, []); // Empety dependency => it runs only on initial render
  
    return (
      <>
        <Link href="/">Home</Link>
        <h1>Blog</h1>
        {posts.map((post: Post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  }
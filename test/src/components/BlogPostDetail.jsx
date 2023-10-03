// BlogPostDetail.js
import React from "react";

export const BlogPostDetail = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Author: {post.author}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
};


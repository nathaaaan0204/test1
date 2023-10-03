// App.js
import React, { Fragment, useState } from "react";

import { CustomModal } from "../components/CustomModal";
import { BlogPostForm } from "../components/BlogPostForm";
import { NavigationBar } from "../components/NavigationBar";
import { HeroSection } from "../components/HeroSection";
import { Link } from "react-router-dom";
import { CustomCard } from "../components/CustomCard";

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveBlogPost = (data) => {
    if (selectedBlogPost) {
      // Update an existing blog post
      const updatedPosts = blogPosts.map((post) =>
        post === selectedBlogPost ? { ...post, ...data } : post
      );
      setBlogPosts(updatedPosts);
    } else {
      // Create a new blog post
      setBlogPosts([...blogPosts, data]);
    }

    closeModal();
  };

  const handleEditBlogPost = (post) => {
    setSelectedBlogPost(post);
    setShowModal(true);
  };

  const handleDeleteBlogPost = (post) => {
    const updatedPosts = blogPosts.filter((p) => p !== post);
    setBlogPosts(updatedPosts);
  };

  return (
   
      <Fragment>
        <NavigationBar />
        <HeroSection />
        <CustomCard/>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={openModal}
          >
            Create Blog Post
          </button>

          {blogPosts.map((post, index) => (
            <div key={index} className="mt-4 p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="line-clamp-2">{post.description}</p>
            
              <p className="text-gray-500">Author: {post.author}</p>
              <img src={post.image} alt="" />
             <Link to="/BlogPostDetail"> <button>Read More</button></Link>
              <button
                className="text-blue-500 hover:underline mr-2"
                onClick={() => handleEditBlogPost(post)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDeleteBlogPost(post)}
              >
                Delete
              </button>
            </div>
          ))}

          <CustomModal
            isOpen={showModal}
            onClose={closeModal}
            title={selectedBlogPost ? "Edit Blog Post" : "Create Blog Post"}
          >
            <BlogPostForm onSave={handleSaveBlogPost} />
          </CustomModal>
        </div>
      </Fragment>

   
  );
};



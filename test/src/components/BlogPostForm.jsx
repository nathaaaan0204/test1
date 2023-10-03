// BlogPostForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export const BlogPostForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    onSave({ title, description, author, image });
    setTitle("");
    setDescription("");
    setAuthor("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <p className="line-clamp-2">{description}</p>
        {description.length > 100 && (
          <Link to="/blog-post-detail">Read More</Link>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Author"
          className="border p-2 rounded w-full"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          className="border p-2 rounded w-full"
          onChange={handleImageChange}
        />
        {image && (
          <img
            src={image}
            alt="Selected"
            className="mt-2 rounded-md max-h-40"
          />
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

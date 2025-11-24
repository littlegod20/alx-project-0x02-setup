import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "../components/common/PostModal";
import { CardProps } from "../interfaces";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "Welcome",
      content:
        "This is a Next.js project with TypeScript and Tailwind CSS. Explore the features and components we've built.",
    },
    {
      title: "Features",
      content:
        "This project includes dynamic routing, reusable components, and a modern UI built with Tailwind CSS.",
    },
    {
      title: "Getting Started",
      content:
        "Navigate through the pages using the header menu. Check out the About page to learn more about this project.",
    },
  ]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Home Page
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add New Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}

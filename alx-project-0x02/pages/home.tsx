import React from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Home Page
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Welcome"
            content="This is a Next.js project with TypeScript and Tailwind CSS. Explore the features and components we've built."
          />
          <Card
            title="Features"
            content="This project includes dynamic routing, reusable components, and a modern UI built with Tailwind CSS."
          />
          <Card
            title="Getting Started"
            content="Navigate through the pages using the header menu. Check out the About page to learn more about this project."
          />
        </div>
      </main>
    </div>
  );
}

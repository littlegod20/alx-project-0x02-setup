import React from 'react';
import Header from '../components/layout/Header';

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Posts Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This is the posts page. Navigate between pages using the header menu.
          </p>
        </div>
      </main>
    </div>
  );
}


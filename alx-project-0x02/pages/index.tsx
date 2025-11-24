import React from 'react';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to ALX Project 2
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This is a Next.js project with TypeScript and Tailwind CSS.
          </p>
        </div>
      </main>
    </div>
  );
}

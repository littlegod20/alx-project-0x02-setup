import React from 'react';
import Header from '../components/layout/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1>About Page</h1>
        </div>
      </main>
    </div>
  );
}


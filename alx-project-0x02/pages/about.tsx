import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            About Page
          </h1>
          <div className="flex flex-col items-center gap-4">
            <Button size="small" shape="rounded-sm">
              Small Button
            </Button>
            <Button size="medium" shape="rounded-md">
              Medium Button
            </Button>
            <Button size="large" shape="rounded-full">
              Large Button
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}


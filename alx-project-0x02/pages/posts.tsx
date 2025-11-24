import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '../interfaces';

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: ApiPost[] = await response.json();
        // Transform API data to match PostProps interface
        const transformedPosts: PostProps[] = data.slice(0, 10).map((post) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(transformedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Posts Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Displaying posts from JSONPlaceholder API
          </p>
        </div>

        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}


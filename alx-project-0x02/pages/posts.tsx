import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '../interfaces';

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
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
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
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

    return {
      props: {
        posts: transformedPosts,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};


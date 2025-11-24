import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '../interfaces';

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Users Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Displaying users from JSONPlaceholder API
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data: ApiUser[] = await response.json();
    // Transform API data to match UserProps interface
    const transformedUsers: UserProps[] = data.map((user) => ({
      name: user.name,
      email: user.email,
      address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
    }));

    return {
      props: {
        users: transformedUsers,
      },
    };
  } catch (error) {
    return {
      props: {
        users: [],
      },
    };
  }
}


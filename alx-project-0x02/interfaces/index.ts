import React from 'react';

// Common TypeScript interfaces for the project

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}


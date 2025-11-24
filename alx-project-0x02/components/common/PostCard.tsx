import React from 'react';
import { type PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 hover:shadow-lg transition-shadow">
      <div className="mb-2">
        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
          User ID: {userId}
        </span>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {content}
      </p>
    </div>
  );
};

export default PostCard;


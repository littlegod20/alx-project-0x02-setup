import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {content}
      </p>
    </div>
  );
};

export default Card;


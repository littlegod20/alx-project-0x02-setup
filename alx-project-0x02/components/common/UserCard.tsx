import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {name}
      </h2>
      <div className="space-y-2">
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Address:</span> {address}
        </p>
      </div>
    </div>
  );
};

export default UserCard;


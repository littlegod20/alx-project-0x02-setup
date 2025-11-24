import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  onClick,
  className = '',
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const baseClasses = 'font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${shape} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;


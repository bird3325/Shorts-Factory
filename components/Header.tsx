
import React from 'react';
import { RocketIcon, UserIcon } from './icons/Icons';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <RocketIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">
            Shorts Factory <span className="text-sm font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-0.5">MVP</span>
          </h1>
        </div>
        <Button variant="secondary">
          <UserIcon className="h-4 w-4 mr-2"/>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;

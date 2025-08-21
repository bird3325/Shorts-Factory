
import React from 'react';
import { TrendingVideo } from '../types';
import Button from './Button';
import { EyeIcon, SparklesIcon } from './icons/Icons';

interface TrendingVideoCardProps {
  video: TrendingVideo;
  onSelect: (video: TrendingVideo) => void;
}

const TrendingVideoCard: React.FC<TrendingVideoCardProps> = ({ video, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 truncate">{video.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
          <div className="flex items-center">
            <EyeIcon className="h-4 w-4 mr-1.5" />
            <span>{video.views}</span>
          </div>
          <div className="flex items-center">
            <div className="h-5 w-5 mr-1.5">{video.categoryIcon}</div>
            <span>{video.category}</span>
          </div>
        </div>
        <Button onClick={() => onSelect(video)} className="w-full mt-4" variant="primary">
          <SparklesIcon className="h-5 w-5 mr-2" />
          Make Shorts
        </Button>
      </div>
    </div>
  );
};

export default TrendingVideoCard;

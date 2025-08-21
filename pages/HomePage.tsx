
import React from 'react';
import { TrendingVideo } from '../types';
import { TRENDING_VIDEOS } from '../constants';
import TrendingVideoCard from '../components/TrendingVideoCard';

interface HomePageProps {
  onSelectVideo: (video: TrendingVideo) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectVideo }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Today's Trending Videos</h2>
        <p className="text-lg text-gray-600 mt-2">Pick a video to instantly create an AI-powered Short.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRENDING_VIDEOS.map(video => (
          <TrendingVideoCard key={video.id} video={video} onSelect={onSelectVideo} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
          Load more videos...
        </button>
      </div>
    </div>
  );
};

export default HomePage;

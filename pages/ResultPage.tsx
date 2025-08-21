
import React, { useMemo } from 'react';
import { TrendingVideo, HighlightClip } from '../types';
import Button from '../components/Button';
import { ArrowLeftIcon, DownloadIcon, RefreshIcon, UploadIcon, PlayIcon } from '../components/icons/Icons';

interface ResultPageProps {
  video: TrendingVideo;
  clips: HighlightClip[];
  onRemake: () => void;
  onBack: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ video, clips, onRemake, onBack }) => {
  const bestClip = useMemo(() => {
    return [...clips].sort((a, b) => b.score - a.score)[0] || null;
  }, [clips]);
  
  const shortLength = bestClip ? bestClip.duration : 45;
  const highlightScore = bestClip ? bestClip.score : 92;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
      <button onClick={onBack} className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to Home
      </button>

      <h2 className="text-3xl font-bold mb-6 text-center">✨ Your Short is Ready!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Preview Player */}
        <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
          <img src={video.thumbnailUrl} alt="Video background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30 blur-sm" />
          <div className="z-10 text-white text-center">
            <div className="w-20 h-20 bg-black bg-opacity-50 rounded-full flex items-center justify-center mb-4">
              <PlayIcon className="h-10 w-10 text-white" />
            </div>
            <p className="font-bold">Preview</p>
            <p className="text-sm">{shortLength} seconds</p>
          </div>
        </div>

        {/* Production Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">📊 Production Info</h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Original Length:</span>
              <span className="font-semibold">{video.originalLength}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shorts Length:</span>
              <span className="font-semibold text-blue-600">{shortLength}s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Highlight Score:</span>
              <span className="font-semibold text-emerald-500">{highlightScore}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Subtitles:</span>
              <span className="font-semibold text-emerald-500">Auto-generated</span>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Button variant="success" className="w-full">
              <DownloadIcon className="h-5 w-5 mr-2" />
              Download (720p)
            </Button>
            <Button variant="secondary" className="w-full">
              <UploadIcon className="h-5 w-5 mr-2" />
              Upload to YouTube
            </Button>
            <Button variant="warning" className="w-full" onClick={onRemake}>
              <RefreshIcon className="h-5 w-5 mr-2" />
              Remake Short
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;


import React, { useState, useEffect } from 'react';
import { TrendingVideo, HighlightClip } from '../types';
import { MOCK_HIGHLIGHT_CLIPS } from '../constants';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import { ArrowLeftIcon, MagicWandIcon, SparklesIcon, StarIcon } from '../components/icons/Icons';

interface ProcessingPageProps {
  video: TrendingVideo;
  onComplete: (clips: HighlightClip[]) => void;
  onBack: () => void;
}

const ProcessingPage: React.FC<ProcessingPageProps> = ({ video, onComplete, onBack }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing analysis...');
  const [highlights, setHighlights] = useState<HighlightClip[]>([]);
  
  useEffect(() => {
    const statuses = [
      'Analyzing audio volume...',
      'Detecting scene changes...',
      'Analyzing comment density...',
      'Calculating highlight scores...',
      'Finalizing clips...',
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + 5;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setStatusText('Analysis complete!');
          const foundClips = MOCK_HIGHLIGHT_CLIPS[video.id] || [];
          setHighlights(foundClips);
          return 100;
        }
        
        const statusIndex = Math.floor(nextProgress / (100 / statuses.length));
        if (statuses[statusIndex] && statusText !== statuses[statusIndex]) {
          setStatusText(statuses[statusIndex]);
        }
        
        return nextProgress;
      });
    }, 200);

    return () => clearInterval(interval);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video.id]);

  const handleCreateShorts = () => {
    onComplete(highlights);
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
        <button onClick={onBack} className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Trending
        </button>
      
        <h2 className="text-2xl font-bold mb-2">✂️ Creating Your Short</h2>
        <p className="text-gray-600 mb-6">Analyzing "<span className="font-semibold">{video.title}</span>"</p>

        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">{statusText}</span>
                <span className="text-sm font-bold text-blue-600">{progress}%</span>
            </div>
            <ProgressBar progress={progress} />
        </div>

        {progress === 100 && (
            <div className="mt-8 animate-fade-in">
                <h3 className="font-bold text-xl mb-4">🔍 Found Highlight Clips</h3>
                <div className="space-y-4">
                    {highlights.map(clip => (
                        <div key={clip.id} className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{clip.description}</p>
                                <p className="text-sm text-gray-500">{`Time: ${clip.timeRange} (${clip.duration}s)`}</p>
                            </div>
                            <div className="flex items-center space-x-2 text-amber-500 font-bold bg-amber-100 text-sm px-3 py-1 rounded-full">
                                <StarIcon className="h-4 w-4"/>
                                <span>{clip.score}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-end space-x-4">
                    <Button variant="secondary" onClick={onBack}>
                        Manual Edit (soon)
                    </Button>
                    <Button variant="primary" onClick={handleCreateShorts}>
                        <MagicWandIcon className="h-5 w-5 mr-2" />
                        Auto-create Short
                    </Button>
                </div>
            </div>
        )}
    </div>
  );
};

export default ProcessingPage;

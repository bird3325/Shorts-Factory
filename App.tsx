
import React, { useState, useCallback } from 'react';
import HomePage from './pages/HomePage';
import ProcessingPage from './pages/ProcessingPage';
import ResultPage from './pages/ResultPage';
import { TrendingVideo, HighlightClip } from './types';
import Header from './components/Header';

export enum Page {
  Home,
  Processing,
  Result,
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedVideo, setSelectedVideo] = useState<TrendingVideo | null>(null);
  const [highlightClips, setHighlightClips] = useState<HighlightClip[] | null>(null);

  const handleStartProcessing = useCallback((video: TrendingVideo) => {
    setSelectedVideo(video);
    setCurrentPage(Page.Processing);
  }, []);

  const handleProcessingComplete = useCallback((clips: HighlightClip[]) => {
    setHighlightClips(clips);
    setCurrentPage(Page.Result);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedVideo(null);
    setHighlightClips(null);
    setCurrentPage(Page.Home);
  }, []);

  const handleRemake = useCallback(() => {
    if (selectedVideo) {
      setHighlightClips(null);
      setCurrentPage(Page.Processing);
    } else {
      handleGoHome();
    }
  }, [selectedVideo, handleGoHome]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Processing:
        return selectedVideo && <ProcessingPage video={selectedVideo} onComplete={handleProcessingComplete} onBack={handleGoHome} />;
      case Page.Result:
        return selectedVideo && highlightClips && <ResultPage video={selectedVideo} clips={highlightClips} onRemake={handleRemake} onBack={handleGoHome} />;
      case Page.Home:
      default:
        return <HomePage onSelectVideo={handleStartProcessing} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;

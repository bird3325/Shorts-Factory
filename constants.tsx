
import React from 'react';
import { TrendingVideo } from './types';
import { GameControllerIcon, MusicNoteIcon, FilmIcon, TrophyIcon } from './components/icons/Icons';

export const TRENDING_VIDEOS: TrendingVideo[] = [
  {
    id: '1',
    title: 'BTS "Dynamite" Official MV Reaction',
    thumbnailUrl: 'https://picsum.photos/seed/bts/800/450',
    views: '5.2M views',
    category: 'Music',
    categoryIcon: <MusicNoteIcon />,
    originalLength: '8:34',
  },
  {
    id: '2',
    title: 'Epic Gaming Moments Compilation #42',
    thumbnailUrl: 'https://picsum.photos/seed/gaming/800/450',
    views: '3.1M views',
    category: 'Gaming',
    categoryIcon: <GameControllerIcon />,
    originalLength: '12:15',
  },
  {
    id: '3',
    title: 'Movie Trailer 2024 - Official Release',
    thumbnailUrl: 'https://picsum.photos/seed/movie/800/450',
    views: '8.9M views',
    category: 'Entertainment',
    categoryIcon: <FilmIcon />,
    originalLength: '2:30',
  },
  {
    id: '4',
    title: 'World Cup Finals - Last 5 Minutes',
    thumbnailUrl: 'https://picsum.photos/seed/sports/800/450',
    views: '10.5M views',
    category: 'Sports',
    categoryIcon: <TrophyIcon />,
    originalLength: '7:48',
  },
    {
    id: '5',
    title: 'Cooking the Perfect Steak | Gordon Ramsay',
    thumbnailUrl: 'https://picsum.photos/seed/cooking/800/450',
    views: '2.4M views',
    category: 'Entertainment',
    categoryIcon: <FilmIcon />,
    originalLength: '15:02',
  },
  {
    id: '6',
    title: 'Unbelievable Magic Tricks Revealed',
    thumbnailUrl: 'https://picsum.photos/seed/magic/800/450',
    views: '4.7M views',
    category: 'Entertainment',
    categoryIcon: <FilmIcon />,
    originalLength: '9:20',
  },
];

export const MOCK_HIGHLIGHT_CLIPS: { [key: string]: import('./types').HighlightClip[] } = {
  '1': [
    { id: 1, timeRange: '0:23-0:45', duration: 22, score: 95, description: "Members' reactions at peak" },
    { id: 2, timeRange: '2:15-2:38', duration: 23, score: 89, description: "The iconic dance break" },
    { id: 3, timeRange: '4:02-4:21', duration: 19, score: 87, description: "Vocal high note section" },
  ],
  '2': [
    { id: 1, timeRange: '1:10-1:30', duration: 20, score: 92, description: "Impossible headshot across map" },
    { id: 2, timeRange: '5:45-6:05', duration: 20, score: 90, description: "1v5 clutch win sequence" },
    { id: 3, timeRange: '9:02-9:25', duration: 23, score: 85, description: "Hilarious bug moment" },
  ],
  '3': [
    { id: 1, timeRange: '0:55-1:15', duration: 20, score: 98, description: "Main character reveal" },
    { id: 2, timeRange: '1:50-2:10', duration: 20, score: 94, description: "Massive explosion sequence" },
  ],
  '4': [
    { id: 1, timeRange: '3:12-3:35', duration: 23, score: 99, description: "Winning goal in extra time" },
    { id: 2, timeRange: '4:01-4:20', duration: 19, score: 91, description: "Trophy celebration moment" },
  ],
  '5': [
    { id: 1, timeRange: '7:30-7:55', duration: 25, score: 93, description: "The perfect crust flip" },
    { id: 2, timeRange: '12:05-12:25', duration: 20, score: 88, description: "Final plating and slice" },
  ],
    '6': [
    { id: 1, timeRange: '2:22-2:45', duration: 23, score: 96, description: "Card trick reveal" },
    { id: 2, timeRange: '6:50-7:10', duration: 20, score: 90, description: "Disappearing act finale" },
  ],
};

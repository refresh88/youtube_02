import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === 'list';
  return (
    <li className={isList ? 'flex gap-1 m-2' : ''}>
      <img
        className={isList ? 'w-60 cursor-pointer' : 'w-full cursor-pointer'}
        src={thumbnails.medium.url}
        alt={title}
        onClick={handleClick}
      />
      <div className='cursor-pointer ml-1' onClick={handleClick}>
        <p className='font-semibol my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}

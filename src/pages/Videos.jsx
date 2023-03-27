import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Youtube from '../services/youtube';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../services/fakeYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    // const youtube = new FakeYoutube();
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>videos {keyword ? `${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

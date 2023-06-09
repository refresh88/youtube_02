import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    // 채널썸네일은 자주 바뀌는것이 아니니 5분까지는 캐쉬에 있는 데이터를 쓰게 함.
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className='flex my-4 mb-8 items-center'>
      {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  );
}

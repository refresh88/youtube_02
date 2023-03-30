import React from 'react';
import BackHome from '../components/BackHome';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h1 className='text-3xl'>페이지를 찾을 수 없습니다. 돌아가세요.</h1>
      <div className='mt-10'>
        <BackHome />
      </div>
    </div>
  );
}

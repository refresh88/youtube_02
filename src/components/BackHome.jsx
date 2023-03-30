import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackHome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div>
      <button className='text-2xl' onClick={handleClick}>
        Home
      </button>
    </div>
  );
}

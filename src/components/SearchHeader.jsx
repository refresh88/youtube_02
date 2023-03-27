import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  /* 뒤로가기 이후에도 검색결과가 keyword를 따라가게 하기 위해
  useParams와 useEffect 사용. */
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          className='w-7/12 p-2 pl-4 text-xl outline-none bg-black text-gray-50 rounded-l-3xl border border-gray-600 focus:border-blue-500 box-border'
          type='text'
          placeholder='검색'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-zinc-600 px-6 rounded-r-3xl text-xl '>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

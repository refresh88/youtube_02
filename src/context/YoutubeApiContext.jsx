import { createContext, useContext } from 'react';
import FakeYoutube from '../services/fakeYoutube';
import FakeYoutubeClient from '../services/fakeYoutubeClient';
import Youtube from '../services/youtube';
import YoutubeClient from '../services/youtubeClient';

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    /* Videos.jsx에서 매번 youtube 인스턴스 생성하던 것을 context provider를 통해 
    단 한번의 인스턴스 생성을 value를 통해 전달.*/
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

// 외부에서  useYoutubeApi 함수를 사용하면 youtube 인스턴스를 사용할 수 있음.
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

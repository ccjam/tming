import React from 'react';
import { Redirect } from 'react-router-dom';

// 워드 클라우드
// import WordCloud from '../pages/WordCloud/index';

// 투표
import Vote from '../pages/Vote/index';

// 로그인 페이지
import Login from '../pages/Login/index';

// 슬롯
import VoteOverlay from '../pages/Slot/voteOverlay';

const authProtectedRoutes = [
  // 워드 클라우드
  // { path: '/wordcloud', component: WordCloud },

  // 투표
  { path: '/vote', component: Vote },

  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Redirect to="/login" /> },
];

// 레이아웃이 필요없는 페이지들
const noLayoutRoutes = [
  // slot
  { path: '/slot/vote', component: VoteOverlay },
];

// 로그인이 필요없는 페이지들
const publicRoutes = [
  // 로그인 페이지login button examples
  { path: '/login', component: Login },
];

export { authProtectedRoutes, noLayoutRoutes, publicRoutes };

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { RiLoginBoxLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
// import { IoSearch } from "react-icons/io5"; search아이콘
import { IoMenu } from "react-icons/io5";
import HomeArea from './home.jsx';
import Hotdeal from './components/Hotdeal';
import Event from './components/Event.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// yarn add react-router-dom@5
// yarn add react-scripts
// yarn add react-icons
// yarn add react-bootstrap bootstrap
// yarn add gh-pages


// 작성 날짜 : 2024-12-30
// 파일의 역할 : 링크 연결, header

function App() {
  return (
    <>
      <header className='header'>
        <div className='language'>
          <span className='kor'>KOR</span>
          <span className='eng'>ENG</span>
        </div>
        <div className='h_top'>
          <h1 className='logo'><Link to='/'><img src='/images/logo.png' alt=''></img></Link></h1>
          <input className='search' type='text'></input>
          <ul>
            <li className='LoginIcon'><Link to='/components/Login'><RiLoginBoxLine />로그인</Link></li>
            <li><Link to='/components/MyPage'><GoPerson />마이페이지</Link></li>
            <li><Link to='/components/Cart'><AiOutlineShopping />장바구니</Link></li>
          </ul>
        </div>
      </header >
      <div className='nav'>
        <div className='category'><IoMenu size={24} />카테고리</div>
        <ul>
          <li><Link to='/components/live'>라이브</Link></li>
          <li><Link to='/components/Hotdeal'>특가</Link></li>
          <li><Link to='/components/Event'>이벤트</Link></li>
          <li><Link to='/components/Best'>베스트</Link></li>
          <li><Link to='/components/Showcase'>쇼케이스</Link></li>
          <li><Link to='/components/Forme'>FOR ME</Link></li>
        </ul>
        <div>ABOUT</div>
      </div>
      <div className='contents'>
        <Route path='/' exact={true} component={HomeArea}></Route>
        <Route path='/components/Hotdeal' component={Hotdeal}></Route>
        <Route path='/components/Event' component={Event}></Route>
      </div>
    </>
  );
}

export default App;

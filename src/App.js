import React from 'react';
import { Route, Link } from 'react-router-dom';
import { RiLoginBoxLine } from "react-icons/ri";
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// react icons
import { GoPerson } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
// Route
import HomeArea from './home.jsx';
import Hotdeal from './components/Hotdeal';
import Event from './components/Event.jsx';
import Best from './components/Best.jsx';
import Langs from './langs.jsx';
import Category from './context/category.jsx';
import AddressBtn from './addressBtn.jsx';
import { Provider } from './data/context.js';

// yarn add react-router-dom@5
// yarn add react-scripts
// yarn add react-icons
// yarn add react-bootstrap bootstrap
// yarn add gh-pages


// 작성 날짜 : 2024-12-30
// 파일의 역할 : 링크 연결, header

function App() {
  return (
    <Provider>
      <header className='header'>
        <div className='language'><Langs /></div>
        <div className='h_top'>
          <h1 className='logo'><Link to='/'><img src='/images/logo.png' alt=''></img></Link></h1>
          <div className='serach'>
            <input className='searchInput' type='text' placeholder='검색어를 입력해주세요.'></input>
            <button type='submit'><IoSearch size={24} /></button>
          </div>
          <ul className='info'>
            <li className='LoginIcon'><Link to='/components/Login'><RiLoginBoxLine />로그인</Link></li>
            <li><Link to='/components/MyPage'><GoPerson />마이페이지</Link></li>
            <li><Link to='/components/Cart'><AiOutlineShopping />장바구니</Link></li>
          </ul>
        </div>
      </header >
      <div className='nav'>
        <div className='category' >
          <Category />
        </div>
        <ul className='navList'>
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
        <Route path='/components/Best' component={Best}></Route>
      </div>
      <div className='footer'>
        <div className='footerInner'>
          <div className='fHeader'>
            <span>서비스 이용약관</span>
            <span className='bold'>개인정보처리방침</span>
            <span>영상정보처리기기 운영/관리 방침</span>
            <span>위치기반서비스 이용약관</span>
            <span>공지사항</span>
            <span>임직원서비스</span>
          </div>
          <div>
            <AddressBtn />
          </div>
          <div className='counsel'>
            <p>이니스프리 제품 고객 상담 <span className='bold'>080-380-0144</span></p>
            <span>평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</span>
          </div>
          <div className='snsIcon'>
            <FaYoutube size={30} />
            <FaInstagram size={30} />
            <FaFacebookF size={30} />
            <FaXTwitter size={30} />
            <MdOutlineFileDownload size={30} />
          </div>
          <div className='info'>
            <span>Copyright ⓒ 2023 innisfree. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;

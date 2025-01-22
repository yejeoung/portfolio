import React from "react";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { useState } from '../data/context';
import './Best.css';

function Best() {
    const onTime = moment().startOf('hour');

    const monthAllBest = useState();

    return (
        <div className="bestWrap">
            <h2>베스트</h2>
            <ul className="navMenu">
                <li><Link to='./best/nowBest'>
                    <button className="bestBtn">실시간 베스트</button>
                </Link></li>
                <li><Link to='./best/weekBest'
                ><button className="bestBtn">주간 베스트</button>
                </Link></li>
                <li><Link to='./best/monthBest'>
                    <button className="bestBtn">월간 베스트</button>
                </Link></li>
            </ul>
            <div className="tabBar">
                <ul className="tabMenu">
                    <li className="tabAll">전체</li>
                    <li>스킨케어</li>
                    <li>메이크업</li>
                    <li>남성</li>
                    <li>바디/헤어/펫</li>
                    <li>기획세트</li>
                    <li>미용소품</li>
                </ul>
                <div className="bestTime">
                    <Moment format='YYYY-MM-DD HH:mm'>{onTime}</Moment>
                    <span> 기준</span>
                </div>
            </div>
            <div>
                {/* 제품 목록 */}
            </div>
        </div>
    );
}

export default Best;
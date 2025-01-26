import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import './Event.css';

function Event() {
    const [activeToggle, setActiveToggle] = useState(1);

    const eventData = {
        shopping: [
            {
                id: 1,
                boon: '쇼핑혜택',
                path: '/images/event/shopping01.jpg',
                date: '25.1.25(토) ~ 25.1.31(금)',
                name1: '~55%특가+14000혜택',
                name2: '세뱃돈 받으세요!'
            },
            {
                id: 2,
                boon: '쇼핑혜택',
                path: '/images/event/shopping02.jpg',
                date: '25.1.25(토) ~ 25.1.31(금)',
                name1: '~7000원 할인쿠폰팩!',
                name2: '지금 바로 다운 받기'
            },
            {
                id: 3,
                boon: '쇼핑혜택',
                path: '/images/event/shopping03.jpg',
                date: '25.1.25(토) ~ 25.1.31(금)',
                name1: '배송비 걱정 그만~!',
                name2: '배송비 무료'
            },
            {
                id: 4,
                boon: '쇼핑혜택',
                path: '/images/event/shopping04.jpg',
                date: '25.1.20(월) ~ 25.1.26(일일)',
                name1: '김나영 PICK 찐찐템',
                name2: '~35%+증정 광세일!'
            },
            {
                id: 5,
                boon: '쇼핑혜택',
                path: '/images/event/shopping05.jpg',
                date: '25.1.1(수) ~ 25.1.31(금)',
                name1: '장원영속광앰플',
                name2: '~30% + GIFT'
            },
            {
                id: 6,
                boon: '쇼핑혜택',
                path: '/images/event/shopping06.jpg',
                date: '25.1.25(토) ~ 25.1.31(금)',
                name1: '~50% 반값 찬스!',
                name2: '핸드크림 쟁일 타이밍'
            },
            {
                id: 7,
                boon: '쇼핑혜택',
                path: '/images/event/shopping07.jpg',
                date: '25.1.16(목) ~ 25.1.31(금)',
                name1: '클렌징폼/오일/티슈',
                name2: '~50% 혜택'
            },
            {
                id: 8,
                boon: '쇼핑혜택',
                path: '/images/event/shopping08.jpg',
                date: '25.1.1(수) ~ 25.1.31(금)',
                name1: '사랑스러운 산리오캐릭터즈',
                name2: '스폐셜 에디션 출시!'
            },
            {
                id: 9,
                boon: '쇼핑혜택',
                path: '/images/event/shopping09.jpg',
                date: '25.1.1(수) ~ 25.1.31(금)',
                name1: '더 귀여운 그린티 마이멜로디',
                name2: '에디션 출시 ~30%혜택!'
            }
        ],
        card: [
            {
                id: 1,
                boon: '제휴혜택',
                path: '/images/event/card01.jpg',
                date: '25.1.25(토) ~ 25.1.31(금)',
                name1: '삼성카드 링크데이 혜택!',
                name2: '링크하고 10% 결제일 할인인'
            },
            {
                id: 2,
                boon: '제휴혜택',
                path: '/images/event/card02.jpg',
                date: '25.1.25(토) ~ 25.1.31(금)',
                name1: '현대카드 M포인트',
                name2: '50% 결제 혜택!'
            }

        ],
        review: [
            {
                id: 1,
                boon: '체험/리뷰',
                path: '/images/event/review01.jpg',
                date: '24.6.24(월) ~ 78.6.9(목)',
                name1: '대학생 에디터들의',
                name2: '뷰티 꿀팁 들으러가기'
            }
        ]
    }

    const eventToggle = (toggleId) => {
        setActiveToggle(toggleId);
    };

    const renderData = () => {
        switch (activeToggle) {
            case 1:
                return [...eventData.shopping, ...eventData.card, ...eventData.review];
            case 2:
                return eventData.review;
            case 3:
                return eventData.shopping;
            case 4:
                return eventData.card;
            default:
                return [];
        }
    };
    return (
        <>
            <div className="eventWrap">
                <div className="eventHeader">
                    <h2>이벤트</h2>
                    <div>당첨자 발표 <IoIosArrowForward/></div>
                </div>
                <ul className="eventNavMenu">
                    <li><Link to='./event/eventData'>
                        <button className="eventBtn" onClick={() => eventToggle(1)}>전체</button>
                    </Link></li>
                    <li><Link to='./event/review'
                    ><button className="eventBtn" onClick={() => eventToggle(2)}>체험/리뷰</button>
                    </Link></li>
                    <li><Link to='./event/shopping'>
                        <button className="eventBtn" onClick={() => eventToggle(3)}>쇼핑혜택</button>
                    </Link></li>
                    <li><Link to='./event/card'>
                        <button className="eventBtn" onClick={() => eventToggle(4)}>제휴혜택</button>
                    </Link></li>
                </ul>
                <div className="eventWrapInner">
                    {renderData().map((item) => (
                        <div key={item.id} className="eventList">
                            <div className="eventImg">
                                <span className="boon">{item.boon}</span>
                                <img src={item.path} alt="" />
                            </div>
                            <div className="eventCnt">
                                <p className="eventDate">{item.date}</p>
                                <p className="eventName">{item.name1}</p>
                                <p className="eventName">{item.name2}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Event;
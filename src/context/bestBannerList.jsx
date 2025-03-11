import React from "react";
import Slider from "react-slick";
import './bestBannerList.css';

function BestBannerlist() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true //좌우버튼 추가
    };
    return (
        <div className="sliderWrap">
            <div className="slider-cnt">
                <Slider {...settings}>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner1.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.20</div>
                            <div className="bannerName">김나영 찐찐템 쫀쫀속광 템 ~35% + 증정까지</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner2.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.1</div>
                            <div className="bannerName">장원영속광앰플 ~30% + GIFT 최대 본품용량 증정!</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner3.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.1</div>
                            <div className="bannerName">역대급 귀여운 만남 산리오 캐릭터즈 스페셜 에디션 출시!</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner4.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.1</div>
                            <div className="bannerName">더 귀여워진 그린티 마이멜로디에디션 출시 ~30%할인, 사은품증정</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner5.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.16</div>
                            <div className="bannerName">NEW 비타민C 캡슐 수분크림! 입고 알람 이벤트!</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner6.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.16</div>
                            <div className="bannerName">보습 클렌징 올리브 클렌징/오일 2개 이상 50%</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner7.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.1</div>
                            <div className="bannerName">겨울철에도 끄떡없는 깐달걀 피부 레티놀 시카 앰플!</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner8.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.1</div>
                            <div className="bannerName">~30%+사은품증정 비타C 세럼&패드! 7일만에 한톤 UP★</div>
                        </div>
                    </div>
                    <div className="slideList">
                        <img src={process.env.PUBLIC_URL + '/images/bestBanner9.jpg'} alt="" />
                        <div className="cntArea">
                            <div className="date">25.1.1</div>
                            <div className="bannerName">블랙티 ~35% 할인! 베스트 패키지 구매시 +블랙티 마스크 증정</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default BestBannerlist;

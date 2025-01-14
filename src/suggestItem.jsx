import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./suggestItem.module.css";

// 작성 날짜 : 2025-01-13
// 파일의 역할 : 추천 제품 item

// yarn add react-slick
// yarn add slick-carousel

function SuggestItem() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // prevArrow: $('#prevArrow'), //이전 화살표만 변경
        // nextArrow: $('#nextArrow'), //다음 화살표만 변경
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg01.png" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>콜라겐 그린티 세라마이드 탄력장벽크림 50mL + 리필</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>43,550</p>
                                <p className={styles.sT2}>35%</p>
                                <p className={styles.sT3}>67,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>#탄력장벽</span>
                                <span className={styles.hashT}>#탄력장벽끌올</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (18,012)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg02.png" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>블랙티 유스 인핸싱 앰플</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>28,000</p>
                                <p className={styles.sT2}>30%</p>
                                <p className={styles.sT3}>40,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>#항산화안티에이징앰플</span>
                                <span className={styles.hashT}>#안티에이징앰플</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (56,096)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg03.png" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>블랙티 유스 인핸싱 앰플 [대용량] x 2개 패키지</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>76,700</p>
                                <p className={styles.sT2}>35%</p>
                                <p className={styles.sT3}>118,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>항산화안티에이징앰플</span>
                                <span className={styles.hashT}>안티에이징앰플</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (56,096)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg04.jpg" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>블랙티 유스 인핸싱 트리트먼트 에센스</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>31,500</p>
                                <p className={styles.sT2}>30%</p>
                                <p className={styles.sT3}>45,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>항산화워터에센스</span>
                                <span className={styles.hashT}>워터에센스</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (19,873)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg05.jpg" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>블랙티 유스 인핸싱 스킨케어 세트</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>37,800</p>
                                <p className={styles.sT2}>30%</p>
                                <p className={styles.sT3}>54,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>#블랙티스킨로션세트</span>
                                <span className={styles.hashT}>#스킨로션세트</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (18,012)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg06.jpg" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>블랙티 유스 인핸싱 크림</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>25,200</p>
                                <p className={styles.sT2}>30%</p>
                                <p className={styles.sT3}>36,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>안티에이징크림</span>
                                <span className={styles.hashT}>탄력</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.8 (8,617)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg07.png" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span>[대용량] 블랙티 유스 인핸싱 앰플 / 미백 탄력케어 피부결 보습</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>41,300</p>
                                <p className={styles.sT2}>30%</p>
                                <p className={styles.sT3}>59,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>항산화안티에이징앰플</span>
                                <span className={styles.hashT}>안티에이징앰플</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (56,213)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg08.png" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>블랙티 유스 앰플[대용량] 50mL+블랙티 크림 50mL</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>61,750</p>
                                <p className={styles.sT2}>35%</p>
                                <p className={styles.sT3}>95,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>#블랙티앰플크림세트</span>
                                <span className={styles.hashT}>#항산화앰플</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.9 (56,221)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg09.jpg" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span><span className={styles.bold}>BEST</span>한란 인리치드 크림</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>22,500</p>
                                <p className={styles.sT2}>25%</p>
                                <p className={styles.sT3}>95,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>#멀티안티에이징크림</span>
                                <span className={styles.hashT}>#탄력</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.8 (11,261)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.suggestItem}>
                        <img src="/images/suggestImg10.jpg" alt="" />
                        <div className={styles.sText}>
                            <div className={styles.sText1}>
                                <span>콜라겐 그린티 세라마이드 탄력장벽 크림 [리필]</span>
                            </div>
                            <div className={styles.sText2}>
                                <p className={styles.sT1}>19,600</p>
                                <p className={styles.sT2}>30%</p>
                                <p className={styles.sT3}>28,000</p>
                            </div>
                            <div className={styles.hash}>
                                <span className={styles.hashT}>#탄력장벽</span>
                                <span className={styles.hashT}>#탄력장벽끌올</span>
                            </div>
                            <div className={styles.star}>
                                <span className={styles.starIcon}><FaStar /></span>
                                <span className={styles.score}>4.8 (18,192)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SuggestItem;

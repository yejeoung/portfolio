import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';
import moment from 'moment';
// react icons
import { GoPlus } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowDropdownCircle } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
// route
import NowItem from './main/nowItem';
import styles from './home.module.css';
import SuggestItem from './main/suggestItem';

// 작성 날짜 : 2025-01-09
// 파일의 역할 : home

// yarn add moment react-moment

function HomeArea() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    //간단하게 정각 시간만 표기하게 끔 함, 어차피 시간은 계속 흐르니까 알아서 바뀜
    const onTime = moment().startOf('hour');


    return (
        <>
            {/* 배너 */}
            <section className={styles.main}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src="/images/main01.jpg" alt="" />
                        <Carousel.Caption>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <div className={styles.cardName1}>20%</div>
                                    <div className={styles.cardName2}>사은품</div>
                                </div>
                                <div className={styles.name}>
                                    <div className={styles.areaName1}>#장원영속광앰플</div>
                                    <div className={styles.areaName2}>레티놀 PDRN 앰플 혜택</div>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.pri1}>45,600</div>
                                    <div className={styles.pri2}>57,000</div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/main02.jpg" alt="" />
                        <Carousel.Caption>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <div className={styles.cardName2}>최대30%</div>
                                    <div className={styles.cardName2}>사은품</div>
                                    <div className={styles.cardName2}>신제품</div>
                                </div>
                                <div className={styles.name}>
                                    <div className={styles.areaName1}>드디어 나왔다!</div>
                                    <div className={styles.areaName2}>레티놀 PDRN 신제품 출시</div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/main03.jpg" alt="" />
                        <Carousel.Caption>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <div className={styles.cardName2}>사은품</div>
                                    <div className={styles.cardName2}>신제품</div>
                                </div>
                                <div className={styles.name}>
                                    <div className={styles.areaName1}>산리오와 이니스프리의</div>
                                    <div className={styles.areaName2}>역대급 만남!</div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/main04.jpg" alt="" />
                        <Carousel.Caption>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <div className={styles.cardName1}>30%</div>
                                    <div className={styles.cardName2}>사은품</div>
                                    <div className={styles.cardName2}>신제품</div>
                                </div>
                                <div className={styles.name}>
                                    <div className={styles.areaName1}>이니스프리 25주년 기념</div>
                                    <div className={styles.areaName2}>그린티 마이멜로디 에디션</div>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.pri1}>40,600</div>
                                    <div className={styles.pri2}>58,000</div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/main05.jpg" alt="" />
                        <Carousel.Caption>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <div className={styles.cardName2}>사은품</div>
                                </div>
                                <div className={styles.name}>
                                    <div className={styles.areaName1}>겨울철 압도적 보습 방패</div>
                                    <div className={styles.areaName2}>블랙티로 안티에이징 시작</div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <article className='content'>
                {/* 출시 된 제품 */}
                <div className={styles.newItem}>
                    <img src="/images/newItem01.jpg" alt="" />
                    <div className={styles.newText}>
                        <p>PDRN 대용량 출시기념!</p>
                        <p>파우치+사은품 증정!</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.newInner}>
                        <div>
                            <p>BEST [파우치 증정] 레티놀 그린티 PDRN 앰플 [대용량]</p>
                        </div>
                        <div className={styles.innerText}>
                            <p className={styles.innerText1}>42,750</p>
                            <p className={styles.innerText2}>25%</p>
                        </div>
                    </div>
                    <div className={styles.newHash}>
                        <p className={styles.hashText}>#레티놀피디알엔앰플</p>
                        <p className={styles.hashText}>#스킨부스터</p>
                    </div>
                </div>

                {/* 출시 전 제품 */}
                <div className={styles.newItem2}>
                    <div className={styles.item}>
                        <div>
                            <img src="/images/item1.jpg" alt="" />
                        </div>
                        <div className={styles.itemText}>
                            <div className={styles.itemText1}><p>1.1(수) 오전 12:00</p></div>
                            <div className={styles.itemText2}>
                                <div>
                                    <p>NEW 대용량 & 토너 출시!</p>
                                    <p>한정수량 스트랩 파우치 증정</p>
                                </div>
                                <div><GoPlus size={40} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/images/item2.jpg" alt="" />
                        <div className={styles.itemText}>
                            <div className={styles.itemText1}><p>12.1(일) 오전 12:00</p></div>
                            <div className={styles.itemText2}>
                                <div>
                                    <p>추운겨울 핸드폰 터치도 OK!</p>
                                    <p>장갑 6,900원 GET!</p>
                                </div>
                                <div><GoPlus size={40} /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 지금 잘나가는 제품 */}
                <div className={styles.nowBest}>
                    <div className={styles.bHeader}>
                        <div className={styles.bhName}>
                            <p className={styles.bhName1}>지금 제일 잘나가요</p>
                            <Moment className={styles.bhtime} format='HH:mm'>{onTime}</Moment>
                        </div>
                        <div className={styles.more}>
                            <p>더보기</p>
                            <div><IoIosArrowForward size={20} /></div>
                        </div>
                    </div>
                    <div className={styles.nowNav}>
                        <ul>
                            <li>전체</li>
                            <li>스킨케어</li>
                            <li>메이크업</li>
                            <li>바디/헤어/펫</li>
                            <li>미용소품</li>
                        </ul>
                    </div>
                    <div><NowItem /></div>
                </div>

                {/* 추천 제품 */}
                <div className={styles.suggest}>
                    <div className={styles.bHeader}>
                        <div className={styles.bhName}>
                            <p className={styles.bhName1}>이 제품 어때요?</p>
                        </div>
                        <div className={styles.more}>
                            <p>더보기</p>
                            <div><IoIosArrowForward size={20} /></div>
                        </div>
                    </div>
                    <div>
                        <SuggestItem />
                    </div>
                </div>

                {/* instagram */}
                <div className={styles.sns}>
                    <div className={styles.snsFont}>
                        <span className={styles.snsName}>@innisfreeofficial</span>
                        <div className={styles.snsLink}>
                            <a href='https://www.instagram.com/innisfreeofficial/'>
                                <span>Follow us on Instagram</span>
                                <IoIosArrowForward />
                            </a>
                        </div>
                    </div>
                    <div className={styles.snsImg}>
                        <img src="/images/snsImg1.png" alt="" />
                        <img src="/images/snsImg2.jpg" alt="" />
                        <img src="/images/snsImg3.jpg" alt="" />
                        <img src="/images/snsImg4.jpg" alt="" />
                    </div>
                </div>
            </article>

            {/* Footer */}
            <article className={styles.footer}>
                <div className={styles.footerInner}>
                    <div className={styles.fHeader}>
                        <span>서비스 이용약관</span>
                        <span className={styles.bold}>개인정보처리방침</span>
                        <span>영상정보처리기기 운영/관리 방침</span>
                        <span>위치기반서비스 이용약관</span>
                        <span>공지사항</span>
                        <span>임직원서비스</span>
                    </div>
                    <div className={styles.footerLogo}>
                        <img src="/images/footerLogo.png" alt="" />
                        <button className={styles.addressBtn}>
                            <IoIosArrowDropdownCircle size={30} color='white' />
                        </button>
                    </div>
                    <div className={styles.counsel}>
                        <p>이니스프리 제품 고객 상담 <span className={styles.bold}>080-380-0144</span></p>
                        <span>평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</span>
                    </div>
                    <div className={styles.snsIcon}>
                        <FaYoutube size={30} />
                        <FaInstagram size={30} />
                        <FaFacebookF size={30} />
                        <FaXTwitter size={30} />
                        <MdOutlineFileDownload size={30} />
                    </div>
                    <div className={styles.info}>
                        <span>Copyright ⓒ 2023 innisfree. All Rights Reserved.</span>
                    </div>
                </div>
            </article>
        </>
    );
}

export default HomeArea;
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './home.module.css';

// 작성 날짜 : 2025-01-09
// 파일의 역할 : home

function HomeArea() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section className={styles.slide}>
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
        

    );
}

export default HomeArea;
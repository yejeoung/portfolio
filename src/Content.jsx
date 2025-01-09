import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './home.module.css';

// 작성 날짜 : 2025-01-07
// 파일의 역할 : home page

function Content() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideData = [
        { img: "/images/main01.jpg", title1: "25%", title2: "사은품", name1: "#장원영속광앰플", name2: "레티놀 PDRN 앰플 혜택", pri1: "42,750", pri2: "57,000" },
        { img: "/images/main02.jpg", title1: "최대30%", title2: "사은품", name1: "드디어 나왔다!", name2: "레티놀 PDRN 신제품 출시", pri1: "40,600", pri2: "58,000" },
        { img: "/images/main03.jpg", title1: "사은품", name1: "산리오와 이니스프리의", name2: "역대급 만남!" },
        { img: "/images/main04.jpg", title1: "30%", title2: "사은품", name1: "이니스프리 25주년 기념", name2: "그린티 마이멜로디 에디션", pri1: "40,600", pri2: "58,000" },
        { img: "/images/main05.jpg", title1: "사은품", name1: "겨울철 압도적 보습 방패", name2: "블랙티로 안티에이징 시작" },
        { img: "/images/main06.jpg", title1: "최대30%", title2: "사은품", name1: "겨울 날씨 트러블엔", name2: "#레티놀 3스텝 끝장 루틴" },
        { img: "/images/main07.jpg", title1: "최대30%", title2: "사은품", name1: "눈부신 아침 피부를 위한", name2: "#비타C홈케어 듀오" },
        { img: "/images/main08.jpg", title1: "사은품", name1: "피부탄력을 끌어올리는", name2: "콜라겐 탄력장벽 크림림" },
    ];

    const totalSlides = slideData.length;

    const arrowLeft = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const arrowRight = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <section className={styles.container}>
                <div className={styles.sliderWrapper}>
                    <ul className={styles.slideContainer}>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName1}>25%</span>
                                    <span className={styles.cardName2}>사은품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>#장원영속광앰플</span>
                                    <span className={styles.name2}>레티놀 PDRN 앰플 혜택</span>
                                </div>
                                <div className={styles.price}>
                                    <span className={styles.pri1}>42,750</span>
                                    <span className={styles.pri2}>57,000</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main01.jpg" alt="" />
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName2}>최대30%</span>
                                    <span className={styles.cardName2}>사은품</span>
                                    <span className={styles.cardName2}>신제품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>드디어 나왔다!</span>
                                    <span className={styles.name2}>레티놀 PDRN 신제품 출시</span>
                                </div>
                                <div className={styles.price}>
                                    <span className={styles.pri1}>40,600</span>
                                    <span className={styles.pri2}>58,000</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main02.jpg" alt="" />
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName2}>사은품</span>
                                    <span className={styles.cardName2}>신제품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>산리오와 이니스프리의</span>
                                    <span className={styles.name2}>역대급 만남!</span>
                                </div>
                                <div className={styles.slideImg}>
                                    <img src="/images/main03.jpg" alt="" />
                                </div>
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName1}>30%</span>
                                    <span className={styles.cardName2}>사은품</span>
                                    <span className={styles.cardName2}>신제품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>이니스프리 25주년 기념</span>
                                    <span className={styles.name2}>그린티 마이멜로디 에디션</span>
                                </div>
                                <div className={styles.price}>
                                    <span className={styles.pri1}>40,600</span>
                                    <span className={styles.pri2}>58,000</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main04.jpg" alt="" />
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName2}>사은품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>겨울철 압도적 보습 방패</span>
                                    <span className={styles.name2}>블랙티로 안티에이징 시작</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main05.jpg" alt="" />
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName2}>최대30%</span>
                                    <span className={styles.cardName2}>사은품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name}>겨울 날씨 트러블엔</span>
                                    <span className={styles.name}>#레티놀 3스텝 끝장 루틴</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main06.jpg" alt="" />
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName2}>최대30%</span>
                                    <span className={styles.cardName2}>사은품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>눈부신 아침 피부를 위한</span>
                                    <span className={styles.name2}>#비타C홈케어 듀오</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main07.jpg" alt="" />
                            </div>
                        </li>
                        <li className={styles.slideBox}>
                            <div className={styles.cntArea}>
                                <div className={styles.card}>
                                    <span className={styles.cardName2}>사은품</span>
                                </div>
                                <div className={styles.name}>
                                    <span className={styles.name1}>피부탄력을 끌어올리는</span>
                                    <span className={styles.name2}>콜라겐 탄력장벽 크림</span>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <img src="/images/main08.jpg" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <button className={styles.slideBtn} onClick={arrowLeft}><IoIosArrowBack /></button>
            <button className={styles.slideBtn} onClick={arrowRight}><IoIosArrowForward /></button>
        </>
    );
}

export default Content;
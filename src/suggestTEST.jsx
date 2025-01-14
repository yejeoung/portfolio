import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./suggestItem.module.css";

// 작성 날짜 : 2025-01-13
// 파일의 역할 : 추천 제품 item

const suggestItems = [
    {
        id: 1,
        imgSrc: "/images/suggestImg01.png",
        best: "BEST",
        title: "콜라겐 그린티 세라마이드 탄력장벽크림 50mL + 리필",
        price: "43,550",
        discount: "35%",
        originalPrice: "67,000",
        hashtags: ["#탄력장벽", "#탄력장벽끌올"],
        rating: "4.9 (18,012)"
    },
    {
        id: 2,
        imgSrc: "/images/suggestImg02.png",
        best: "BEST",
        title: "블랙티 유스 인핸싱 앰플",
        price: "28,000",
        discount: "30%",
        originalPrice: "40,000",
        hashtags: ["#항산화안티에이징앰플", "#안티에이징앰플"],
        rating: "4.9 (56,096)"
    },
    {
        id: 3,
        imgSrc: "/images/suggestImg03.png",
        best: "BEST",
        title: "블랙티 유스 인핸싱 앰플 [대용량] x 2개 패키지",
        price: "76,700",
        discount: "35%",
        originalPrice: "118,000",
        hashtags: ["항산화안티에이징앰플", "안티에이징앰플"],
        rating: "4.9 (56,096)"
    },
    {
        id: 4,
        imgSrc: "/images/suggestImg04.jpg",
        best: "BEST",
        title: "블랙티 유스 인핸싱 트리트먼트 에센스",
        price: "31,500",
        discount: "30%",
        originalPrice: "45,000",
        hashtags: ["항산화워터에센스", "워터에센스"],
        rating: "4.9 (19,873)"
    },
    {
        id: 5,
        imgSrc: "/images/suggestImg05.jpg",
        best: "BEST",
        title: "블랙티 유스 인핸싱 스킨케어 세트",
        price: "37,800",
        discount: "30%",
        originalPrice: "54,000",
        hashtags: ["#블랙티스킨로션세트", "#스킨로션세트"],
        rating: "4.9 (19,873)"
    },
    {
        id: 6,
        imgSrc: "/images/suggestImg06.jpg",
        best: "BEST",
        title: "블랙티 유스 인핸싱 크림",
        price: "25,200",
        discount: "30%",
        originalPrice: "36,000",
        hashtags: ["안티에이징크림", "탄력"],
        rating: "4.8 (8,617)"
    },
    {
        id: 7,
        imgSrc: "/images/suggestImg07.png",
        title: "[대용량] 블랙티 유스 인핸싱 앰플 / 미백 탄력케어 피부결 보습",
        price: "41,300",
        discount: "30%",
        originalPrice: "59,000",
        hashtags: ["항산화안티에이징앰플", "안티에이징앰플"],
        rating: "4.8 (8,617)"
    },
    {
        id: 8,
        imgSrc: "/images/suggestImg08.jpg",
        best: "BEST",
        title: "블랙티 유스 앰플[대용량] 50mL+블랙티 크림 50mL",
        price: "61,750",
        discount: "35%",
        originalPrice: "95,000",
        hashtags: ["#블랙티앰플크림세트", "#항산화앰플"],
        rating: "4.9 (56,221)"
    },
    {
        id: 9,
        imgSrc: "/images/suggestImg09.jpg",
        best: "BEST",
        title: "한란 인리치드 크림",
        price: "22,500",
        discount: "25%",
        originalPrice: "95,000",
        hashtags: ["#멀티안티에이징크림", "#탄력"],
        rating: "4.8 (11,261)"
    },
    {
        id: 10,
        imgSrc: "/images/suggestImg10.jpg",
        title: "콜라겐 그린티 세라마이드 탄력장벽 크림 [리필]",
        price: "19,600",
        discount: "30%",
        originalPrice: "28,000",
        hashtags: ["#탄력장벽", "#탄력장벽끌올"],
        rating: "4.8 (18,192)"
    }
]

function SuggestTEST() {

    const [current, setCurrent] = useState(0);
    const length = suggestItems.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    return (
        <div className={styles.suggestSlide}>
            <div className={styles.sliderWrap}>
                <div className={styles.suggest}>
                    {suggestItems.map((item, index) => (
                        <div
                            className={`${styles.suggestItem} ${index === current ? styles.active : ""}`}
                            key={item.id}
                        >
                            <img src={item.imgSrc} alt={item.title} />
                            <div className={styles.sText}>
                                <div className={styles.sText1}>
                                    <span>
                                        {item.best && <span className={styles.bold}>{item.best}</span>}
                                        {item.title}
                                    </span>
                                </div>
                                <div className={styles.sText2}>
                                    <p className={styles.sT1}>{item.price}</p>
                                    <p className={styles.sT2}>{item.discount}</p>
                                    <p className={styles.sT3}>{item.originalPrice}</p>
                                </div>
                                <div className={styles.hash}>
                                    {item.hashtags.map((tag, idx) => (
                                        <span className={styles.hashT} key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.star}>
                                    <span className={styles.starIcon}><FaStar /></span>
                                    <span className={styles.score}>{item.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            <div className={styles.sugbtnBox}>
                <button className={styles.sugPrevBtn} onClick={prevSlide}><IoIosArrowBack size={32} /></button>
                <button className={styles.sugNextBtn} onClick={nextSlide}><IoIosArrowForward size={32} /></button>
            </div>
        </div>
    );
}

export default SuggestTEST;
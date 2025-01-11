import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./nowItem.module.css";

function NowItem() {
    return (
        <>
            {/* 첫 번째 줄 */}
            <div className={styles.nowBest}>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg01.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>BEST</p>
                            <p>[마이멜로디 에디션] 그린티 수분세럼 80mL+그린티 수분크림50mL</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>40,600</p>
                            <p className={styles.nIT2}>30%</p>
                            <p className={styles.nIT3}>58,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (26,169)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg02.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>BEST</p>
                            <p>[장원영 pick] 레티놀 그린티 PDRN 스킨부스터 앰플</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>30,000</p>
                            <p className={styles.nIT2}>25%</p>
                            <p className={styles.nIT3}>40,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (10,092)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg03.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>Best</p>
                            <p>[파우치 증정] 레티놀 그린티 PDRN 앰플 대용량 x 2개</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>79,800</p>
                            <p className={styles.nIT2}>30%</p>
                            <p className={styles.nIT3}>114,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (10,092)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg04.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>Best</p>
                            <p>에너지 마스크</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>2,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (50,199)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg05.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>Best</p>
                            <p>[장원영 pick] 레티놀 그린티 PDRN 앰플 [대용량]</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>42,750</p>
                            <p className={styles.nIT2}>25%</p>
                            <p className={styles.nIT3}>57,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (10,092)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 두 번째 줄 */}
            <div className={styles.nowItem}>
                <div className={styles.nowItem06}>
                    <img src="/images/nbImg06.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>BEST</p>
                            <p>레티놀 PDRN 토너 170mL+스킨팩 5겹 화장솜 80매</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>19,750</p>
                            <p className={styles.nIT2}>33%</p>
                            <p className={styles.nIT3}>29,500</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>5 (45)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg07.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>BEST</p>
                            <p>[마이멜로디 에디션] 그린티 히알루론산 수분세럼</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>22,320</p>
                            <p className={styles.nIT2}>28%</p>
                            <p className={styles.nIT3}>31,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (26,169)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg08.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>Best</p>
                            <p>레티놀 그린티 PDRN 스킨부스터 토너</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>17,500</p>
                            <p className={styles.nIT2}>30%</p>
                            <p className={styles.nIT3}>25,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>5 (45)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg09.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>Best</p>
                            <p>레티놀 그린티 PDRN 앰플 40mL+레티놀 PDRN 토너 170mL</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>57,400</p>
                            <p className={styles.nIT2}>30%</p>
                            <p className={styles.nIT3}>82,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (10,092)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nowItem}>
                    <img src="/images/nbImg10.jpg" alt="" />
                    <div className={styles.nIText}>
                        <div className={styles.nIText1}>
                            <p className={styles.bold}>Best</p>
                            <p>액티브 마스크</p>
                        </div>
                        <div className={styles.nIText2}>
                            <p className={styles.nIT1}>3,000</p>
                        </div>
                        <div className={styles.star}>
                            <div><FaStar /></div>
                            <p>4.9 (7,271)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NowItem;
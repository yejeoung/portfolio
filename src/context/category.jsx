import React from "react";
import { IoMenu } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';
import './category.css';

// 파일의 역할 : 카테고리 메뉴

function Category() {
    return (
        <div className="category">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><IoMenu size={24} />카테고리</Accordion.Header>
                    <Accordion.Body>
                        <ul className="ctgheader">
                            <li>
                                <div className="ctghName">스킨케어</div>
                                <ul className="ctgList">
                                    <li>에센스/세럼/앰플</li>
                                    <li>로션/크림</li>
                                    <li>스킨/토너/미스트</li>
                                    <li>선케어</li>
                                    <li>클렌징</li>
                                    <li>팩/마스크</li>
                                    <li>립/아이케어</li>
                                    <li>오일/마사지</li>
                                    <li>기획 세트</li>
                                    <li>기타</li>
                                </ul>
                            </li>
                            <li>
                                <div className="ctghName">메이크업</div>
                                <ul className="ctgList">
                                    <li>페이스메이크업</li>
                                    <li>아이메이크업</li>
                                    <li>립메이크업</li>
                                    <li>네일</li>
                                </ul>
                            </li>
                            <li>
                                <div className="ctghName">남성</div>
                                <ul className="ctgList">
                                    <li>스킨케어</li>
                                    <li>클렌징</li>
                                    <li>기획 세트</li>
                                </ul>
                            </li>
                            <li>
                                <div className="ctghName">바디/헤어/펫</div>
                                <ul className="ctgList">
                                    <li>바디 로션/미스트</li>
                                    <li>바디 워시/청결제</li>
                                    <li>핸드/풋케어</li>
                                    <li>샴푸/트리트먼트</li>
                                    <li>헤어 에센스/미스트</li>
                                    <li>헤어 스타일링</li>
                                    <li>펫</li>
                                </ul>
                            </li>
                            <li>
                                <div className="ctghName">기획 세트</div>
                                <ul className="ctgList">
                                    <li>기획 세트</li>
                                </ul>
                            </li>
                            <li>
                                <div className="ctghName">미용소품</div>
                                <ul className="ctgList">
                                    <li>헤어/바디 소품</li>
                                    <li>브러시</li>
                                    <li>퍼프/스펀지</li>
                                    <li>화장솜/면봉/기름종이</li>
                                    <li>클렌징 소품</li>
                                    <li>기타 소품</li>
                                </ul>
                            </li>
                            <li>
                                <div className="ctghName">피부고민</div>
                                <ul className="ctgList">
                                    <li>수분/보습/속건조</li>
                                    <li>모공/피지/블랙헤드</li>
                                    <li>주름/탄력</li>
                                    <li>트러블/리페어</li>
                                    <li>각질/피부결</li>
                                    <li>잡티/피부톤</li>
                                    <li>영양/토탈안티에이징</li>
                                    <li>진정/민감</li>
                                </ul>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Category;
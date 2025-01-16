import React from "react";

function Category() {
    return (
        <>
            <ul>
                <li>스킨케어</li>
                <li>메이크업</li>
                <li>남성</li>
                <li>바디/헤어/펫</li>
                <li>기획 세트</li>
                <li>미용소품</li>
                <li>피부고민</li>
            </ul>
            <div className="ctgInner">
                <ul className="skincare">
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
                <ul className="makeup">
                    <li>페이스메이크업</li>
                    <li>아이메이크업</li>
                    <li>립메이크업</li>
                    <li>네일</li>
                </ul>
                <ul className="men">
                    <li>스킨케어</li>
                    <li>클렌징</li>
                    <li>기획 세트</li>
                </ul>
                <ul className="bhp">
                    <li>바디 로션/미스트</li>
                    <li>바디 워시/청결제</li>
                    <li>핸드/풋케어</li>
                    <li>샴푸/트리트먼트</li>
                    <li>헤어 에센스/미스트</li>
                    <li>헤어 스타일링</li>
                    <li>펫</li>
                </ul>
                <ul className="set">
                    <li>기획 세트</li>
                </ul>
                <ul className="props">
                    <li>헤어/바디 소품</li>
                    <li>브러시</li>
                    <li>퍼프/스펀지</li>
                    <li>화장솜/면봉/기름종이</li>
                    <li>클렌징 소품</li>
                    <li>기타 소품</li>
                </ul>
                <ul className="worry">
                    <li>수분/보습/속건조</li>
                    <li>모공/피지/블랙헤드</li>
                    <li>주름/탄력</li>
                    <li>트러블/리페어</li>
                    <li>각질/피부결</li>
                    <li>잡티/피부톤</li>
                    <li>영양/토탈안티에이징</li>
                    <li>진정/민감</li>
                </ul>
            </div>

        </>
    );
}

export default Category;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Best.css';
import BestBannerlist from "../context/bestBannerList";

function Best() {
    const [activeToggle, setActiveToggle] = useState(1);

    const bestData = {
        nowAllData: [
            {
                id: 1,
                path: (process.env.PUBLIC_URL + '/images/nowAllBest/nowAllBest01.jpg'),
                best: 'BEST',
                name: '애플씨드 클렌징 오일',
                pri1: '10,500',
                sale: '~50%',
                pri2: '21,000',
                icon: '★',
                star: '4.8 (14,643)'
            },
            {
                id: 2,
                path: '/images/nowAllBest/nowAllBest02.jpg',
                best: 'BEST',
                name: '레티놀 PDRN 토너 170mL+앰플 25mL+그린티 수분크림 50mL',
                pri1: '64,400',
                sale: '30%',
                pri2: '92,000',
                free: '증정',
                icon: '★',
                star: '4.9 (11,243)'
            },
            {
                id: 3,
                path: '/images/nowAllBest/nowAllBest03.png',
                best: 'BEST',
                name: '[장원영 pick] [대용량 40mL] 레타놀 PDRN 앰플',
                pri1: '42,750',
                sale: '25%',
                pri2: '57,000',
                free: '증정',
                icon: '★',
                star: '4.9 (11,243)'
            },
            {
                id: 4,
                path: '/images/nowAllBest/nowAllBest04.png',
                best: 'BEST',
                name: '그린티 히알루론산 수분크림 80mL 더블기획 [튜브]',
                pri1: '53,200',
                sale: '30%',
                pri2: '76,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,882)'
            },
            {
                id: 5,
                path: '/images/nowAllBest/nowAllBest05.jpg',
                best: 'BEST',
                name: '올리브 비타민 E 리얼 폼 클렌징',
                pri1: '7,000',
                sale: '~50%',
                pri2: '14,000',
                icon: '★',
                star: '4.9 (2,171)'
            },
            {
                id: 6,
                path: '/images/nowAllBest/nowAllBest06.png',
                best: 'BEST',
                name: '[2개패키지] 대용량 비타C 잡티토닝세럼',
                pri1: '78,400',
                sale: '30%',
                pri2: '112,000',
                free: '증정',
                icon: '★',
                star: '4.8 (23,322)'
            },
            {
                id: 7,
                path: '/images/nowAllBest/nowAllBest07.png',
                best: 'BEST',
                name: '블랙티 유스 앰플[대용량] 50mL + 블랙티 크림 50mL',
                pri1: '61,750',
                sale: '35%',
                pri2: '95,000',
                free: '증정',
                icon: '★',
                star: '4.9 (56,392)'
            },
            {
                id: 8,
                path: '/images/nowAllBest/nowAllBest08.png',
                best: 'BEST',
                name: '그린티 수분세럼 130mL + 그린티 수분크림 80mL 패키지',
                pri1: '58,100',
                sale: '30%',
                pri2: '83,000',
                free: '증정',
                icon: '★',
                star: '4.9 (26,682)'
            },
            {
                id: 9,
                path: '/images/nowAllBest/nowAllBest09.jpg',
                best: 'BEST',
                name: '올리브 비타민 E 리얼 클렌징 티슈',
                pri1: '4,500',
                sale: '~50%',
                pri2: '9,000',
                icon: '★',
                star: '4.8 (2,007)'
            },
            {
                id: 10,
                path: '/images/nowAllBest/nowAllBest10.png',
                best: 'BEST',
                name: '콜라겐 그린티 세라마이드 탄력장벽크림 50mL + 리필',
                pri1: '43,550',
                sale: '35%',
                pri2: '67,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,374)'
            },
            {
                id: 11,
                path: '/images/nowAllBest/nowAllBest11.jpg',
                best: 'BEST',
                name: '포레스트 포맨 올인원 에센스 / 남자피부관리 남자스킨로션 민감성',
                pri1: '23,200',
                sale: '20%',
                pri2: '29,000',
                icon: '★',
                star: '4.9 (5,139)'
            },
            {
                id: 12,
                path: '/images/nowAllBest/nowAllBest12.jpg',
                best: 'BEST',
                name: '링클 사이언스 스팟 트리트먼트',
                pri1: '37,400',
                icon: '★',
                star: '4.8 (10,068)'
            },
            {
                id: 13,
                path: '/images/nowAllBest/nowAllBest13.png',
                best: 'BEST',
                name: '그린티 씨드 히알루론산 세럼 130mL 더블기획세트',
                pri1: '64,800',
                sale: '28%',
                pri2: '90,000',
                free: '증정',
                icon: '★',
                star: '4.9 (26,682)'
            },
            {
                id: 14,
                path: '/images/nowAllBest/nowAllBest14.jpg',
                best: 'BEST',
                name: '레티놀 PDRN 앰플 25mL x 3개',
                pri1: '90,000',
                sale: '25%',
                pri2: '120,000',
                free: '증정',
                icon: '★',
                star: '4.9 (11,244)'
            },
            {
                id: 15,
                path: '/images/nowAllBest/nowAllBest15.jpg',
                best: 'BEST',
                name: '그린티 히알루론산 스킨케어 2종 세트 / 스킨 로션 수분 저자극 닦토',
                pri1: '28,000',
                sale: '30%',
                pri2: '40,000',
                icon: '★',
                star: '4.9 (2,634)'
            },
            {
                id: 16,
                path: '/images/nowAllBest/nowAllBest16.jpg',
                best: 'BEST',
                name: '그린티 히알루론산 스킨',
                pri1: '13,300',
                sale: '30%',
                pri2: '19,000',
                free: '증정',
                icon: '★',
                star: '4.8 (5,199)'
            },
            {
                id: 17,
                path: '/images/nowAllBest/nowAllBest17.jpg',
                best: 'BEST',
                name: '화산송이 바하 모공 클렌징 오일 / 블랙헤드 피지제거 피지관리 민감성',
                pri1: '14,000',
                sale: '~50%',
                pri2: '28,000',
                icon: '★',
                star: '4.8 (452)'
            },
            {
                id: 18,
                path: '/images/nowAllBest/nowAllBest18.png',
                best: 'BEST',
                name: '블랙티 유스 인핸싱 트리트먼트 에센스',
                pri1: '31,500',
                sale: '30%',
                pri2: '45,000',
                icon: '★',
                star: '4.9 (19,951)'
            },
            {
                id: 19,
                path: '/images/nowAllBest/nowAllBest19.jpg',
                best: 'BEST',
                name: '에너지 마스크',
                pri1: '1,400',
                sale: '30%',
                pri2: '2,000',
                icon: '★',
                star: '4.9 (54,645)'
            },
            {
                id: 20,
                path: '/images/nowAllBest/nowAllBest20.jpg',
                best: 'BEST',
                name: '블랙티 유스 앰플[대용량] 50mL + 블랙티 오일 30mL',
                pri1: '64,350',
                sale: '35%',
                pri2: '99,000',
                free: '증정',
                icon: '★',
                star: '4.9 (56,392)'
            }
        ],
        weekAllData: [
            {
                id: 1,
                path: '/images/weekAllBest/weekAllBest01.png',
                best: 'BEST',
                name: '레티놀 그린티 PDRN 앰플 40mL+레티놀 PDRN 토너 170mL',
                pri1: '59,040',
                sale: '28%',
                pri2: '82,000',
                icon: '★',
                star: '4.9 (11,246)'
            },
            {
                id: 2,
                path: '/images/weekAllBest/weekAllBest02.jpg',
                best: 'BEST',
                name: '에너지 마스크',
                pri1: '1,400',
                sale: '30%',
                pri2: '2,000',
                icon: '★',
                star: '4.9 (54,645)'
            },
            {
                id: 3,
                path: '/images/weekAllBest/weekAllBest03.jpg',
                best: 'BEST',
                name: '[마이멜로디 에디션] 그린티 수분 세럼 80mL+그린티 수분크림50mL',
                pri1: '40,600',
                sale: '30%',
                pri2: '58,000',
                free: '증정',
                icon: '★',
                star: '4.9 (26,683)'
            },
            {
                id: 4,
                path: '/images/weekAllBest/weekAllBest04.png',
                best: 'BEST',
                name: '그린티 히알루론산 수분크림 80mL 더블기획 [튜브]',
                pri1: '53,200',
                sale: '30%',
                pri2: '76,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,882)'
            },
            {
                id: 5,
                path: '/images/weekAllBest/weekAllBest05.png',
                best: 'BEST',
                name: '[장원영 pick] [대용량 40mL] 레타놀 PDRN 앰플',
                pri1: '42,750',
                sale: '25%',
                pri2: '57,000',
                free: '증정',
                icon: '★',
                star: '4.9 (11,243)'
            },
            {
                id: 6,
                path: '/images/weekAllBest/weekAllBest06.jpg',
                best: 'BEST',
                name: '액티브 마스크',
                pri1: '30,000',
                icon: '★',
                star: '4.8 (23,322)'
            },
            {
                id: 7,
                path: '/images/weekAllBest/weekAllBest07.png',
                best: 'BEST',
                name: '콜라겐 그린티 세라마이드 탄력장벽크림 50mL + 리필',
                pri1: '43,550',
                sale: '35%',
                pri2: '67,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,374)'
            },
            {
                id: 8,
                path: '/images/weekAllBest/weekAllBest08.jpg',
                best: 'BEST',
                name: '레티놀 그린티 PDRN 스킨부스터 토너',
                pri1: '17,500',
                sale: '30%',
                pri2: '25,000',
                icon: '★',
                star: '4.9 (822)'
            },
            {
                id: 9,
                path: '/images/weekAllBest/weekAllBest09.jpg',
                best: 'BEST',
                name: '포레스트 포맨 올인원 에센스 / 남자피부관리 남자스킨로션 민감성',
                pri1: '23,200',
                sale: '20%',
                pri2: '29,000',
                icon: '★',
                star: '4.9 (5,139)'
            },
            {
                id: 10,
                path: '/images/weekAllBest/weekAllBest10.jpg',
                best: 'BEST',
                name: '블랙티 유스 인핸싱 앰플 [대용량] x 2개 패키지',
                pri1: '76,700',
                sale: '35%',
                pri2: '118,000',
                free: '증정',
                icon: '★',
                star: '4.9 (56,393)'
            },
            {
                id: 11,
                path: '/images/weekAllBest/weekAllBest11.jpg',
                best: 'BEST',
                name: '블랙티 유스 인핸싱 앰플 마스크',
                pri1: '3,500',
                sale: '30%',
                pri2: '5,000',
                icon: '★',
                star: '4.9 (7,885)'
            },
            {
                id: 12,
                path: '/images/weekAllBest/weekAllBest12.jpg',
                best: 'BEST',
                name: '레티놀 시카 흔적 장벽크림 기획세트 (50mL+30mL)',
                pri1: '24,500',
                sale: '30%',
                pri2: '35,000',
                icon: '★',
                star: '4.8 (13,761)'
            },
            {
                id: 13,
                path: '/images/weekAllBest/weekAllBest13.jpg',
                best: 'BEST',
                name: '레티놀 시카 흔적 앰플 기획세트 (30mL+15mL)',
                pri1: '30,000',
                sale: '25%',
                pri2: '40,000',
                icon: '★',
                star: '4.8 (54,187)'
            },
            {
                id: 14,
                path: '/images/weekAllBest/weekAllBest14.jpg',
                best: 'BEST',
                name: '[폼폼푸린 에디션]폼폼푸린 유채꿀립밤',
                pri1: '7,000',
                sale: '30%',
                pri2: '10,000',
                icon: '★',
                star: '4.8 (7,642)'
            },
            {
                id: 15,
                path: '/images/weekAllBest/weekAllBest15.png',
                best: 'BEST',
                name: '레티놀 그린티 PDRN 앰플 25mL+레티놀 PDRN 토너 170mL',
                pri1: '46,800',
                sale: '28%',
                pri2: '65,000',
                free: '증정',
                icon: '★',
                star: '4.9 (11,246)'
            },
            {
                id: 16,
                path: '/images/weekAllBest/weekAllBest16.jpg',
                best: 'BEST',
                name: '레티놀 시카 앰플 [대용량] x 2개 패키지',
                pri1: '79,800',
                sale: '30%',
                pri2: '114,000',
                free: '증정',
                icon: '★',
                star: '4.8 (54,187)'
            },
            {
                id: 17,
                path: '/images/weekAllBest/weekAllBest17.png',
                best: 'BEST',
                name: '그린티 히알루론산 수분크림 / 저자극 진정 끈적이지않는 수분크림',
                pri1: '20,250',
                sale: '25%',
                pri2: '27,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,887)'
            },
            {
                id: 18,
                path: '/images/weekAllBest/weekAllBest18.png',
                best: 'BEST',
                name: '그린티 씨드 세럼130mL + 그린티 수분크림80mL',
                pri1: '58,100',
                sale: '30%',
                pri2: '83,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,887)'
            },
            {
                id: 19,
                path: '/images/weekAllBest/weekAllBest19.jpg',
                best: 'BEST',
                name: '한란 인리치드 크림',
                pri1: '22,500',
                sale: '25%',
                pri2: '30,000',
                icon: '★',
                star: '4.8 (11,292)'
            },
            {
                id: 20,
                path: '/images/weekAllBest/weekAllBest20.jpg',
                best: 'BEST',
                name: '레티놀 시카 흔적 앰플 [대용량]',
                pri1: '42,750',
                sale: '25%',
                pri2: '57,000',
                free: '증정',
                icon: '★',
                star: '4.8 (54,187)'
            }
        ],
        monthAllData: [
            {
                id: 1,
                path: '/images/monthAllBest/monthAllBest01.png',
                best: 'BEST',
                name: '그린티 히알루론산 수분크림 80mL 더블기획 [튜브]',
                pri1: '53,200',
                sale: '30%',
                pri2: '76,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,882)'
            },
            {
                id: 2,
                path: '/images/monthAllBest/monthAllBest02.jpg',
                best: 'BEST',
                name: '화산송이 바하 모공 폼 클렌징 / 피지관리 지성 민감성 피지제거 딥클렌징',
                pri1: '9,750',
                sale: '25%',
                pri2: '13,000',
                icon: '★',
                star: '4.9 (18,368)'
            },
            {
                id: 3,
                path: '/images/monthAllBest/monthAllBest03.jpg',
                best: 'BEST',
                name: '히알루론산 수분 선크림 SPF50+ PA++++ / 히알루론산 유기자차',
                pri1: '21,000',
                sale: '25%',
                pri2: '28,000',
                icon: '★',
                star: '4.8 (26,000)'
            },
            {
                id: 4,
                path: '/images/monthAllBest/monthAllBest04.jpg',
                best: 'BEST',
                name: '듀이 틴트 립밤',
                pri1: '14,400',
                sale: '20%',
                pri2: '18,000',
                icon: '★',
                star: '4.8 (10,652)'
            },
            {
                id: 5,
                path: '/images/monthAllBest/monthAllBest05.jpg',
                best: 'BEST',
                name: '그린티 아미노 수분 폼 클렌징',
                pri1: '9,750',
                sale: '25%',
                pri2: '13,000',
                icon: '★',
                star: '4.9 (15,890)'
            },
            {
                id: 6,
                path: '/images/monthAllBest/monthAllBest06.png',
                best: 'BEST',
                name: '콜라겐 그린티 세라마이드 탄력장벽크림 50mL + 리필',
                pri1: '43,550',
                sale: '35%',
                pri2: '67,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,374)'
            },
            {
                id: 7,
                path: '/images/monthAllBest/monthAllBest07.jpg',
                best: 'BEST',
                name: '유채꿀립밤 [초보습]',
                pri1: '7,000',
                sale: '30%',
                pri2: '10,000',
                icon: '★',
                star: '4.8 (12,229)'
            },
            {
                id: 8,
                path: '/images/monthAllBest/monthAllBest08.jpg',
                best: 'BEST',
                name: '에너지 마스크',
                pri1: '1,400',
                sale: '30%',
                pri2: '2,000',
                icon: '★',
                star: '4.9 (54,645)'
            },
            {
                id: 9,
                path: '/images/monthAllBest/monthAllBest09.png',
                best: 'BEST',
                name: '그린티 히알루론산 수분크림 / 저자극 진정 끈적이지않는 수분크림',
                pri1: '20,250',
                sale: '25%',
                pri2: '27,000',
                free: '증정',
                icon: '★',
                star: '4.9 (18,887)'
            },
            {
                id: 10,
                path: '/images/monthAllBest/monthAllBest10.jpg',
                best: 'BEST',
                name: '블랙티 유스 인핸싱 앰플 [대용량] x 2개 패키지',
                pri1: '76,700',
                sale: '35%',
                pri2: '118,000',
                free: '증정',
                icon: '★',
                star: '4.9 (56,393)'
            },
            {
                id: 11,
                path: '/images/monthAllBest/monthAllBest11.jpg',
                best: 'BEST',
                name: '포레스트 포맨 올인원 에센스 / 남자피부관리 남자스킨로션 민감성',
                pri1: '23,200',
                sale: '20%',
                pri2: '29,000',
                icon: '★',
                star: '4.9 (5,139)'
            },
            {
                id: 12,
                path: '/images/monthAllBest/monthAllBest12.jpg',
                best: 'BEST',
                name: '애플씨드 립앤아이 메이크업 리무버 / 마스카라 클렌징 워터리 세안제',
                pri1: '9,000',
                icon: '★',
                star: '4.8 (16,568)'
            },
            {
                id: 13,
                path: '/images/monthAllBest/monthAllBest13.jpg',
                best: 'BEST',
                name: '[장원영 pick] [25mL] 레티놀 PDRN 스킨부스터 앰플',
                pri1: '32,000',
                sale: '20%',
                pri2: '40,000',
                free: '증정',
                icon: '★',
                star: '4.9 (11,247)'
            },
            {
                id: 14,
                path: '/images/monthAllBest/monthAllBest14.jpg',
                best: 'BEST',
                name: '[더블기획] 비타C 잡티토닝패드 / 브라이트닝 화이트닝 토너패드 피부톤',
                pri1: '39,200',
                sale: '30%',
                pri2: '56,000',
                icon: '★',
                star: '4.8 (5,133)'
            },
            {
                id: 15,
                path: '/images/monthAllBest/monthAllBest15.png',
                best: 'BEST',
                name: '블랙티 유스 앰플[대용량] 50mL + 블랙티 크림 50mL',
                pri1: '61,750',
                sale: '35%',
                pri2: '95,000',
                free: '증정',
                icon: '★',
                star: '4.9 (56,392)'
            },
            {
                id: 16,
                path: '/images/monthAllBest/monthAllBest16.jpg',
                best: 'BEST',
                name: '올리브 비타민 E 리얼 폼 클렌징',
                pri1: '7,000',
                sale: '~50%',
                pri2: '14,000',
                icon: '★',
                star: '4.9 (2,171)'
            },
            {
                id: 17,
                path: '/images/monthAllBest/monthAllBest17.jpg',
                best: 'BEST',
                name: '올리브 비타민 E 리얼 클렌징 오일',
                pri1: '13,250',
                sale: '~50%',
                pri2: '27,000',
                icon: '★',
                star: '4.8 (529)'
            },
            {
                id: 18,
                path: '/images/monthAllBest/monthAllBest18.jpg',
                best: 'BEST',
                name: '그린티 히알루론산 수분 선세럼 SPF50+ PA++++ / 속광',
                pri1: '21,000',
                sale: '25%',
                pri2: '28,000',
                icon: '★',
                star: '4.8 (5,246)'
            },
            {
                id: 19,
                path: '/images/monthAllBest/monthAllBest19.jpg',
                best: 'BEST',
                name: '유채꿀 립밤',
                pri1: '7,000',
                sale: '30%',
                pri2: '10,000',
                icon: '★',
                star: '4.8 (7,642)'
            },
            {
                id: 20,
                path: '/images/monthAllBest/monthAllBest20.jpg',
                best: 'BEST',
                name: '톤업 노세범 선스크린 EX SPF50+ PA++++',
                pri1: '18,000',
                sale: '25%',
                pri2: '24,000',
                icon: '★',
                star: '4.7 (6,453)'
            }
        ]
    }

    const handleToggle = (toggleId) => {
        setActiveToggle(toggleId);
    };

    const renderData = () => {
        switch (activeToggle) {
            case 1:
                return bestData.nowAllData;
            case 2:
                return bestData.weekAllData;
            case 3:
                return bestData.monthAllData;
            default:
                return [];
        }
    };

    return (
        <>
            <div className="bestWrap">
                <h2>베스트</h2>
                <ul className="navMenu">
                    <li><Link to='./best/nowBest'>
                        <button className="bestBtn" onClick={() => handleToggle(1)}>실시간 베스트</button>
                    </Link></li>
                    <li><Link to='./best/weekBest'
                    ><button className="bestBtn" onClick={() => handleToggle(2)}>주간 베스트</button>
                    </Link></li>
                    <li><Link to='./best/monthBest'>
                        <button className="bestBtn" onClick={() => handleToggle(3)}>월간 베스트</button>
                    </Link></li>
                </ul>
                <div className="tabBar">
                    <ul className="tabMenu">
                        <li className="tabAll">전체</li>
                        <li>스킨케어</li>
                        <li>메이크업</li>
                        <li>남성</li>
                        <li>바디/헤어/펫</li>
                        <li>기획세트</li>
                        <li>미용소품</li>
                    </ul>
                </div>
                <div className="wrapInner">
                    {renderData().map((item) => (
                        <div key={item.id} className="itemList">
                            <div className="itemImg">
                                {item.path}
                            </div>
                            <div className="name">
                                <strong className="best">{item.best} </strong>
                                <span>{item.name}</span>
                            </div>
                            <div className="priBox">
                                <strong className="pri1">{item.pri1}</strong>
                                <span className="sale">{item.sale}</span>
                                <span className="pri2">{item.pri2}</span>
                            </div>
                            {item.free && <span className="free">{item.free}</span>}
                            <div className="starGrabe">
                                <span className="icon">{item.icon} </span>
                                <span className="grabe">{item.star}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bestBanner">
                    <BestBannerlist/>
            </div>
        </>
    );
}

export default Best;
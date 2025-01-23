import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import './addressBtn.css';

function AddressBtn() {
    const addressClick = (e) => {
        const address = document.querySelector('.address');

        // 내용 보이기 (display: none)
        if (address.style.display !== 'block') {
            address.style.display = 'block';
        }
        // 내용 숨기기 (display: block)
        else {
            address.style.display = 'none';
        }
    }

    return (
        <>
            <div className='footerLogo'>
                <img src="/images/footerLogo.png" alt="" />
            <button className='addressBtn' onClick={addressClick}>
                <IoIosArrowDropdownCircle size={30} color='white' />
            </button>
            </div>
            <div className='address'>
                <p>(주)이니스프리 서울특별시 용산구 한강대로 100(한강로2가) 7층 이니스프리 대표이사 최민정</p>
                <p>사업자 등록번호 106-86-68127 통신판매신고번호 2018-서울용산-0014 제품 문의 : 080-380-0114 FAX 02-6040-1708</p>
                <p>이메일 주소 innisfree@innisfree.com 비즈니스제휴/입점문의 partner.biz@innisfree.com</p>
                <p>이메일 주소 무단 수집 거부 개인정보 보호책임자 최민정 호스팅 서비스 제공자 (주)이니스프리</p>
            </div>
        </>
    );
}

export default AddressBtn;
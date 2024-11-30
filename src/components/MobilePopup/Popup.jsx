import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useMediaQuery } from "react-responsive";
import styles from "./Popup.module.scss";

const Popup = ({ onClosed, popupImage, numbering }) => {
    const [type, setType] = useState(0);  // 팝업 상태 (0: 열림, 1: 하루 보지 않기 클릭, 2: 닫기 클릭)
    const [cookies, setCookie] = useCookies();
    const isPopupShown = cookies[`Popup_Cookie${numbering}`];  // 쿠키 확인
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    // 쿠키의 유효기한을 지정하는 함수 (2시간)
    const getExpiredDate = (hours) => {
        const date = new Date();  // 현재 시간을 받아온다
        date.setHours(date.getHours() + hours);  // 현재 시간에 hours만큼 더함
        return date;
    };

    // 팝업을 닫는 함수
    const closePopup = (type) => {
        if (type === 1) {
            // "오늘 하루 보지 않기" 버튼 클릭 시
            const expires = getExpiredDate(2);  // 2시간 동안 쿠키 유지
            setCookie(`Popup_Cookie${numbering}`, true, { path: '/', expires });
        }
        // 팝업을 닫기 (쿠키 설정 후 또는 닫기 버튼 클릭 시)
        setTimeout(() => onClosed(false), 100);  // 0.1초 후 팝업 닫기
    };


    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.contentContainer}>
                {/* 각 이미지에 맞는 usemap 설정 */}
                <img
                    className={styles.popupImg}
                    style={!isMobile && numbering === 1 ? { width: '40vw'} : {}}
                    src={popupImage}
                    alt={`hansinduhyue-popup-image${numbering}`}
                    useMap={`#image-map${numbering}`}  // 각 이미지마다 다른 맵을 사용
                />

                {/* 이미지 맵 영역 정의 */}
                {numbering === 2 && (
                    <map name="image-map2">
                        <area 
                            target="_blank" 
                            alt="관심고객등록" 
                            title="관심고객등록" 
                            href="https://naver.me/G58kVeiB" 
                            coords="1,292,359,475"  // page1의 좌표
                            shape="rect" 
                        />
                    </map>
                )}

                {numbering === 1 && (
                    <map name="image-map1">
                        <area 
                            target="_self" 
                            alt="입주자 모집 공고" 
                            title="입주자 모집 공고" 
                            href="https://www.bunyang-114.com/SalesInfo/announcement" 
                            coords="21,452,289,542"  // page2의 좌표
                            shape="rect" 
                        />
                        <area 
                            target="_self" 
                            alt="관심고객등록" 
                            title="관심고객등록" 
                            href="https://form.naver.com/response/RRY4_7XtCglhbhmKSjwLcA" 
                            coords="346,556,656,439"  // page2의 좌표
                            shape="rect" 
                        />
                    </map>
                )}

                {numbering === 3 && (
                    <map name="image-map3">
                        <area 
                            target="_self" 
                            alt="관심고객등록" 
                            title="" 
                            href="" 
                            coords=""  // page3의 좌표
                            shape="rect" 
                        />
                        <area 
                            target="_self" 
                            alt="관심고객등록" 
                            title="" 
                            href="" 
                            coords=""  // page3의 좌표
                            shape="rect" 
                        />
                    </map>
                )}

                <div className={styles.btnContainer}>
                    <div className={styles.todayNotOpenBtn} onClick={() => { setType(1); closePopup(1); }}>
                        오늘 하루 보지 않기
                    </div>
                    <div className={styles.closeBtn} onClick={() => { setType(2); closePopup(2); }}>
                        닫기
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;

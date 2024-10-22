import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import styles from "./Popup.module.scss"

import page1 from "../../assets/Popup/page1.jpg";
import page2 from "../../assets/Popup/page2.jpg";

const Popup = ({ onClosed }) => {
    const [type, setType] = useState(0);
    const [cookies, setCookie] = useCookies(['Popup_Cookie']); // 쿠키에 저장되는 내용

    const onClose = () => {
        onClosed(false);
    }

    // 쿠키의 유효기한을 지정하는 함수
    const getExpiredDate = (days) => {
        const date = new Date(); // 현재 시간을 받아온다
        date.setDate(date.getDate() + days);
        // 현재 시간의 날짜에 days 만큼 더하여 유효기간을 지정
        return date;
    };

    // 닫기 버튼을 누를 때마다 실행될 코드.
    useEffect(() => {
        if (type === 1) {
            // 쿠키를 저장하는 핵심 코드
            const expires = getExpiredDate(1);
            setCookie('Popup_Cookie', true, { path: '/', expires });
            onClose(true);
        } else if (type === 2) {
            onClose(true);
        }
    }, [type, cookies]);

    return (
        <div className={styles.container}>

            <div className={styles.imageContainer}>
                <img className={styles.image1} src={page1} alt="jungheung-class-page1" />
                <img className={styles.image2} src={page2} alt="jungheung-class-page2" />
            </div>

            <div className={styles.closeBtn}>
                <div onClick={() => setType(1)}>오늘 하루 열지 않기</div>
                <div onClick={() => setType(2)}>팝업창 닫기</div>
            </div>
        </div>
    )
}

export default Popup;


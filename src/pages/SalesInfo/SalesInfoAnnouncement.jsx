import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './SalesInfo.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import Ready from "../../components/Ready/Ready";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const ComplexGuide1 = () => {
    const menuContents = [
        { title: "인터넷 청약", url: "/SalesInfo/guide" },
        { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
        { title: "모집공고안내", url: "/SalesInfo/announcement" },
        { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImage2Loaded, setIsImage2Loaded] = useState(false);  // 이미지 로드 상태 추가
    const { pathname } = useLocation();

    // 페이지 로드 시 상단으로 스크롤 이동
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // 스크롤 이벤트로 헤더 상태 변경
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // image2 로드 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsImage2Loaded(true);
        }, 1000);  // 배너 이미지보다 1초 후에 image2 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="모집공고안내" />

            <MenuBar contents={menuContents} />

            <div className={styles.textBox}>
                <div>입주자 모집공고안내를 확인하세요</div>
                <div>소수만 누리는 프리미엄 브레인시티 푸르지오</div>
            </div>

            <Ready />

            <div className={styles.commonBox}>
                <div className={styles.notice}>
                    ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를 확인하시기 바랍니다.
                </div>
            </div>

            {/* 청약하는 방법 안내 이미지 */}
            <img
                className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
                src="page1.jpg"  // 실제 이미지 경로를 넣으세요
                alt="청약하는 방법 안내"
            />	

            <Footer />
        </div>
    );
};

export default ComplexGuide1;

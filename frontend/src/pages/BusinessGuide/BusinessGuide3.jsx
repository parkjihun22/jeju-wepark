import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// 이미지를 임포트하지 않고 사용 (page1, page2)
import page1 from "../../assets/BusinessGuide/BusinessGuide3/page1.jpg";  // 1단지 이미지
import page2 from "../../assets/BusinessGuide/BusinessGuide3/page2.jpg";  // 2단지 이미지

const BusinessGuide2 = () => {
    const menuContents = [
        { title: "사업안내", url: "/BusinessGuide/intro" },
        { title: "분양일정", url: "/BusinessGuide/plan" },
        { title: "입주자모집공고", url: "/BusinessGuide/documents" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const { pathname } = useLocation();
    const [selectedComplex, setSelectedComplex] = useState(1); // 1단지로 초기 설정

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
                <title>입주자모집공고 - 위파크제주</title>
                <meta name="description" content="위파크제주 입주자모집공고를 통해 중요한 정보를 확인하세요. 
                분양 일정과 필요한 모든 정보를 제공하여 성공적인 분양을 지원합니다." />
                <meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
                <link rel="canonical" href="http://www.apt-789.com/BusinessGuide/documents" />
            </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />
            <Bener title="사업개요" />
            <MenuBar contents={menuContents} />

            <div className={styles.complexSelector2}>
                <button
                    onClick={() => setSelectedComplex(1)}
                    className={`${styles.button} ${selectedComplex === 1 ? styles['active-1'] : ''}`}
                >
                    1단지
                </button>
                <button
                    onClick={() => setSelectedComplex(2)}
                    className={`${styles.button} ${selectedComplex === 2 ? styles['active-2'] : ''}`}
                >
                    2단지
                </button>
            </div>

            <div className={styles.imageContainer}>
                {/* 선택된 단지에 맞는 이미지 하나만 표시 */}
                <div className={styles.imageBox}>
                    <img
                        src={selectedComplex === 1 ? page1 : page2} // 1단지일 때 page1, 2단지일 때 page2 이미지
                        alt="입주자모집공고 이미지"
                        className={styles.image}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BusinessGuide2;

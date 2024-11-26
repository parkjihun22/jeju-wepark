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

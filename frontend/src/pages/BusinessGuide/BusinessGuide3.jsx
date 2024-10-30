import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/BusinessGuide3/page1.jpg";
import page2 from "../../assets/BusinessGuide/BusinessGuide3/page2.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
        { title: "사업안내", url: "/BusinessGuide/intro" },
        { title: "분양일정", url: "/BusinessGuide/plan" },
        { title: "입주자모집공고", url: "/BusinessGuide/documents" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const { pathname } = useLocation();

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
				<title>계약서류안내 - 위파크제주</title>
				<meta name="description" content="위파크제주 분양일정을 통해 중요한 분양 일정을 확인하세요. 
				분양 일정과 필요한 모든 정보를 제공하여 성공적인 분양을 지원합니다." />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/BusinessGuide/documents" />
			</Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />
            <Bener title="사업개요" />
            <MenuBar contents={menuContents} />
            <div className={styles.imageContainer}>
                <div className={styles.imageBox}>
                    <img src={page1} alt="Image 1" />
                </div>
                <div className={styles.imageBox}>
                    <img src={page2} alt="Image 2" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BusinessGuide2;

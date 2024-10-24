import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
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

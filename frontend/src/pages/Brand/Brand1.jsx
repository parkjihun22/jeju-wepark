import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
// import Ready from "../../components/Ready/Ready";
import FixIcon from "../../components/FixIcon/FixIcon";

import page1 from "../../assets/Brand/intro/brand1.jpg";
import page2 from "../../assets/Brand/intro/brand2.jpg";

const Brand1 = () => {
	const menuContents = [{ title: "브랜드소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }]
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행
	// 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환

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

	return (
		<div className={styles.container}>
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="브랜드 소개" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>자부심이 되는 이름</div>
				<div>제주 위파크는 자연친화 공간에 앞선 감각을 더한 <br/>
			</div>
				<div>프리미엄 주거 브랜드입니다.</div>
			</div>
			
			<img src={page1} className={styles.page1Image} alt="brand-image-1" />
			<img src={page2} className={styles.page2Image} alt="brand-image-1" />

			<Footer />
		</div>
	)
}

export default Brand1;

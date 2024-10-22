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
				<div>대전 도안신도시 눈부신 가치 위에</div>
				<div>현대 힐스테이트의 새로운 자부심으로 찾아옵니다.</div>
			</div>
			
			<img src={page1} className={styles.page1Image} alt="brand-image-1" />

			<Footer />
		</div>
	)
}

export default Brand1;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "입주자모집공고", url: "/BusinessGuide/documents" }
	];
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
			<Helmet>
				<title>분양일정 - 위파크제주</title>
				<meta name="description" content="위파크제주의 분양일정과 주요 청약 정보를 확인하세요. 
				새로운 주거 단지에서 기회를 잡기 위한 모든 필요한 날짜와 절차에 대해 자세히 안내합니다." />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/BusinessGuide/plan" />
			</Helmet>
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />

			<img className={styles.img2} src={page1} />

			<Footer />
		</div>
	)
}

export default BusinessGuide2;

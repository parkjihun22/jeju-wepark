import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import Ready from "../../components/Ready/Ready";
import FixIcon from "../../components/FixIcon/FixIcon";

import page1 from "../../assets/ComplexGuide/ComplexGuide2/page1.jpg";
import page2 from "../../assets/ComplexGuide/ComplexGuide2/page2.jpg";

const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedComplex, setSelectedComplex] = useState(1);
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
			<Bener title="단지안내"/>
			<MenuBar contents={menuContents} />

			<div className={styles.complexSelector}>
				<button 
					onClick={() => setSelectedComplex(1)}
					className={`${selectedComplex === 1 ? styles.activeButton : styles.inactiveButton}`}
				>
					1단지
				</button>
				<button 
					onClick={() => setSelectedComplex(2)}
					className={`${selectedComplex === 2 ? styles.activeButton : styles.inactiveButton}`}
				>
					2단지
				</button>
			</div>

			{/* 선택된 단지에 따라 이미지 표시 */}
			{selectedComplex === 1 && (
				<img src={page1} className={styles.image} alt="ComplexGuide1-image-1" />
			)}
			{selectedComplex === 2 && (
				<img src={page2} className={styles.image} alt="ComplexGuide2-image-1" />
			)}

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를 확인하시기 바랍니다.
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default ComplexGuide1;

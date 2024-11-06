import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import Ready from "../../components/Ready/Ready";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

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
			<Helmet>
				<title>호수배치도 - 위파크제주</title>
				<meta name="description" content="제주위파크의 세심하게 계획된 동호수배치도를 통해 각 유닛의 위치와 조망권을 확인하세요. 
				효율적인 동선과 최적의 개인 공간을 제공합니다." />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="http://www.apt-789.com/ComplexGuide/detailintro" />
			</Helmet>


			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내"/>
			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>초대형 복합문화 주거도시의 시작</div>
				<div>한라산 아래 가장 큰 랜드마크 제주 위파크</div>
			</div>
			
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

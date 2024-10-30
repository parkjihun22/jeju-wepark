import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";
import page2 from "../../assets/ComplexGuide/ComplexGuide3/page2.jpg";


const ComplexGuide3 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedComplex, setSelectedComplex] = useState(1); // 현재 선택된 단지 (1단지 또는 2단지)
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
				<title>커뮤니티 - 위파크제주</title>
				<meta name="description" content="제주위파크의 커뮤니티센터에서 다양한 생활 편의 시설을 이용해보세요. 
					헬스장, 독서실, 카페 등 다양한 시설이 마련되어 있어 주민들의 편리한 생활을 돕습니다" />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/ComplexGuide/community" />
			</Helmet>
			
			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내" />
			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>초대형 복합문화 주거도시의 시작</div>
				<div>한라산 아래 가장 큰 랜드마크 제주 위파크</div>
			</div>


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
					※ 상기 커뮤니티 시설 이미지에는 임의로 가구, 운동시설 및 기타 인테리어등을 배치하여 시뮬레이션한 것으로 일부 미제공 품목이 포함되어 있으며, 실제 시공시 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 상기 CG 이미지, 사진 및 내용은 소비자의 이해를 돕기 위한 것으로 분양대상물을 축소 표현하여 실제 크기 및 거리 등과 차이가 있습니다.
				</div>
				<div className={styles.notice}>
					※ 상기 커뮤니티 이미지는 소비자의 이해를 돕기 위한 것으로 시설물의 위치, 규모, 명칭 등은 시공시 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 문주, 경비실, 외부 엘리베이터실, 계단실 등 외부 시설물의 형태, 디자인, 마감재 등은 기능 및 외관 개선을 위해 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 본 홈페이지 제작과정상 오탈자가 있을 수 있으므로 계약 시 반드시 확인하시기 바랍니다.

				</div>
				<div className={styles.notice}>
					※ 상기 커뮤니티시설의 운영은 입주민들에 의해 유지·관리됩니다.
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide3;

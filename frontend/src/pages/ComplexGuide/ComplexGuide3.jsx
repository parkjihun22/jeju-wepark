import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

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
			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내" />
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
					※ 상기 이미지에 표현된 외관 디자인은 개략적인 이해를 돕기 위한 것으로, 상품특화 및 인허가 협의에 따라 입면 디자인, 경관조명, 출입구, 색채, 몰딩, 창호, 난간, 옥상 장식물, 줄눈, 각종 시설물의 디자인 및 형태, 마감사양, 조명 설치 위치 등이 실시공시 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 본 단지의 명칭, 동호수 표기, 외부 색채, 외관 디자인, 옥탑 디자인, 외부 조명시설, 태양광 발전 설비시설 등은 현장 여건 및 인허가 관청과의 심의, 협의 과정에서 향후 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 단지 공용 태양광 패널이 주동 옥상에 설치될 예정이며, 시설을 훼손하거나 제거할 수 없습니다. 또한, 본 공사 시 시공 여건에 따라 위치 및 규모(크기, 높이, 개소)가 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 문주, 경비실, 외부 엘리베이터실, 계단실 등 외부 시설물의 형태, 디자인, 마감재 등은 기능 및 외관 개선을 위해 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 옥상 구조물은 본 공사 시 형태 변경 또는 구조물 지지를 위한 기둥이 추가 시공될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 본 공사 시 옥상구조물 상부는 도장 시공을 하지 않습니다.
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide3;

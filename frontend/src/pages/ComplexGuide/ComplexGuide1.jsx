import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.jpg";
import page2 from "../../assets/ComplexGuide/ComplexGuide1/page2.jpg";
import page3 from "../../assets/ComplexGuide/ComplexGuide1/page3.jpg";
import page4 from "../../assets/ComplexGuide/ComplexGuide1/page4.jpg";

const ComplexGuide1 = () => {
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
				<title>단지배치도 - 위파크제주</title>
				<meta name="description" content="위파크제주의 단지배치도를 통해 단지의 전체 구조와 배치를 확인하세요. 
				효율적인 공간 활용과 자연 친화적인 설계를 통해 쾌적한 단지 환경을 제공합니다." />
				<meta name="keywords" content="제주 위파크" />
				<link rel="canonical" href="http://www.apt-789.com/ComplexGuide/intro" />
			</Helmet>


			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내" />
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
			{/* 선택된 단지에 따라 이미지 표시 */}
{selectedComplex === 1 && (
    <>
        <img src={page1} className={styles.image} alt="ComplexGuide1-image-1" />
        <img src={page2} className={styles.image} alt="ComplexGuide1-image-2" />
    </>
)}

{selectedComplex === 2 && (
    <>
        <img src={page3} className={styles.image} alt="ComplexGuide2-image-1" />
        <img src={page4} className={styles.image} alt="ComplexGuide2-image-2" />
    </>
)}

			<div className={styles.commonBox}>
				{selectedComplex === 1 && (
					<div>
						{/* 1단지 배치도 및 정보 */}
						<div className={styles.notice}>
							※ 1단지 배치도 및 관련 정보
						</div>
					</div>
				)}
				{selectedComplex === 2 && (
					<div>
						{/* 2단지 배치도 및 정보 */}
						<div className={styles.notice}>
							※ 2단지 배치도 및 관련 정보
						</div>
					</div>
				)}
				<div className={styles.notice}>
					※ 상기 단지배치도는 고객의 이해를 돕기 위한 것으로 실제 시공 시 다소 차이가 있을 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 단지 주변 도로의 여건과 교통시설물 등은 인허가 당시의 기준으로 제작하였으며, 향후 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 단지 조경 및 식재계획은 변경되어 시공될 수 있으며, 외부시설물의 형태 및 위치는 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 단지 내 어린이놀이터, 주민운동시설, 휴게시설물, 수경시설의 배치와 디자인은 향후 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 옥상 구조물은 본 공사 시 형태 변경 또는 구조물 지지를 위한 기둥이 추가 시공될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 상기 단지 배치도와 입주자모집공고가 상이할 경우 입주자모집공고가 우선합니다.
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide1;

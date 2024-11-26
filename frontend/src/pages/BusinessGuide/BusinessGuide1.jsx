import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData = {
	1: [
		{ label: '사업명', value: '제주시 오등봉공원 민간공원특례사업 공동주택 1단지 신축공사 ' },
		{ label: '사업위치', value: '제주시 오라이동 854-1번지일원' },
		{ label: '대지면적', value: '44,758.0000㎡' },
		{ label: '건축면적', value: '10,986.2856㎡' },
		{ label: '건폐율', value: '24.5460%' },
		{ label: '세대수', value: '지하 3층 ~ 지상 최고 15층 15개동 686세대' },
		{ label: '주차대수', value: '1,243대(1.8대/세대)' },
	],
	2: [
		{ label: '사업명', value: '제주시 오등봉공원 민간공원특례사업 공동주택 2단지 신축공사 ' },
		{ label: '사업위치', value: '제주시 오라이동 923번지 일원' },
		{ label: '대지면적', value: '46,212.0000㎡' },
		{ label: '건축면적', value: '10,165.1373㎡' },
		{ label: '건폐율', value: '21.9967%' },
		{ label: '세대수', value: '지하2층~지상 최고 15층 13개동 715세대' },
		{ label: '주차대수', value: '1,317대(1.8대/세대)' },
	],
};

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "입주자모집공고", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation();
	const [selectedComplex, setSelectedComplex] = useState(1);
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const handleScroll = () => {
		setIsScroll(window.scrollY > 0);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
				<title>사업안내 - 위파크제주</title>
				<meta name="description" content="위파크제주의 사업개요를 통해 프로젝트의 전반적인 개요와 개발 비전을 확인하세요. 
				최신 건축 기술과 혁신적인 설계를 통해 쾌적한 생활 환경을 제공합니다." />
				<meta name="keywords" content="제주 위파크" />
				<link rel="canonical" href="http://www.apt-789.com/BusinessGuide/intro" />
			</Helmet>


			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="사업개요" />
			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>초대형 복합문화 주거도시의 시작</div>
				<div>한라산 아래 가장 큰 랜드마크 제주 위파크</div>
			</div>
			
			<img className={styles.img1} src={page1} alt="사업개요 이미지" />
			
			<div className={styles.complexSelector}>
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


			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} alt="Table Image" />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData[selectedComplex].map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Footer />
		</div>
	);
};

export default BusinessGuide1;
	
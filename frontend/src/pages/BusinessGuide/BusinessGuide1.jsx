import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData = [
	{ label: '사업명', value: '대전 힐스테이트 도안리버파크 3,5단지 ' },
	{ label: '사업위치', value: '도안지구 2-2지구 SAL1,2BL 공동주택 신축공사' },
	{ label: '대지면적', value: '3단지: 25,800.00㎡ ｜ 5단지: 90,546.00㎡' },
	{ label: '건축면적', value: '3단지: 5,185.55㎡ ｜ 5단지: 13,050.99㎡' },
	{ label: '연면적', value: '3단지: 90,319.78㎡ ｜ 5단지: 312,359.25㎡' },
	{ label: '3단지규모', value: '3단지: 지하 2층 ~ 지상 최고 35층 6개동 443세대' },
	{ label: '5단지규모', value: '5단지: 지하 2층 ~ 지상 최고 35층 6개동 1,639세대' },
	{ label: '주차대수', value: '3단지:834대 (1.88대) ｜ 5단지:4,144대(2.53대)' },
];

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "계약서류안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation();
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.container}>
			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="사업개요" />
			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>대전 도안신도시의 중심에서 누리는 특별한 라이프 컬렉션</div>
				<div>대전 힐스테이트 도안리버파크의 새로운 자부심으로 찾아옵니다.</div>
			</div>
			
			<img className={styles.img1} src={page1} />

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className={styles.commonBox}>
				{/* 공지사항 내용 */}
			</div>

			<Footer />
		</div >
	);
};

export default BusinessGuide1;
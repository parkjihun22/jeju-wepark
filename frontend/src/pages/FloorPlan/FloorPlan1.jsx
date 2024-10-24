import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './FloorPlan.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/FloorPlan/FloorPlan1/page1.jpg";
import page2 from "../../assets/FloorPlan/FloorPlan1/page2.jpg";

const FloorPlan1 = () => {
	const menuContents = [
		{ title: "84A", url: "/FloorPlan/59A" },
		{ title: "84B", url: "/FloorPlan/59B" },
		{ title: "108A", url: "/FloorPlan/108A" },
		{ title: "108B", url: "/FloorPlan/108B" },
		{ title: "129", url: "/FloorPlan/129" },
		{ title: "166P", url: "/FloorPlan/166P" },
		{ title: "183P", url: "/FloorPlan/183P" },
		{ title: "197P", url: "/FloorPlan/197P" },
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

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="세대안내" />

			<MenuBar contents={menuContents} />

			<img src={page1} className={styles.image} alt="FloorPlan-image-1" />
			<img src={page2} className={styles.image} alt="FloorPlan-image-2" />

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
	)
}

export default FloorPlan1;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const LocationEnvironment1 = () => {
	const menuContents = [{ title: "입지안내", url: "/LocationEnvironment/intro" }, { title: "프리미엄", url: "/LocationEnvironment/primium" }];
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

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
           			<div>대전 도안신도시 중심 눈부신 가치 위에</div>
           		 	<div>힐스테이트의 새로운 자부심으로 찾아옵니다.</div>
         		</div>

			<img src={page1} className={styles.premiumImage} alt="premium-image-1" />

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 단지 주변 교통시설, 기타 주변 개발계획 등은 인·허가 및 정부 시책에 따라 변경 및 취소 가능하며 이는 사업주체 및 시공사와 무관합니다.
				</div>
				<div className={styles.notice}>
					※ 서남부스포츠타운(예정) 관련 내용은 대전광역시 기획조정실 정책기획관 보도자료(2024.04.24)를 참고하였습니다

				</div>
				<div className={styles.notice}>
					※ 대전국가산업단지(예정) 관련 내용은 대전광역시 전략사업추진실 산업입지과 보도자료(2023.03.15)를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※ 현충원IC(추진 중) 관련 내용은 대전광역시 교통건설국 건설도로과 보도자료(2023.05.10)를 참고하였습니다
				</div>
				<div className={styles.notice}>
					※ 옥상 구조물은 본 공사 시 형태 변경 또는 구조물 지지를 위한 기둥이 추가 시공될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 도시철도 2호선 트램(예정) 관련 내용은 "대전광역시 고시 제 2020-42호"를 참고하였습니다
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

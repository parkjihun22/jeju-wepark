import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Ready from "../../components/Ready/Ready";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

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

			<Bener title="단지안내" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
			<div>브레인시티 푸르지오가 눈부신 가치 위에</div>
			<div>새로운 자부심으로 찾아옵니다.</div>
			</div>

			<Ready />

			<div className={styles.commonBox}>
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
	)
}

export default ComplexGuide1;

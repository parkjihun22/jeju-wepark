import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";

import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import page2 from "../../assets/LocationEnvironment/LocationEnvironment1/page2.jpg";

const LocationSection = [
	{ img: section2Image1, titleText: "확정된 개발호재로<br />새롭게 살수록 높아지는 미래가치", contentText: "대전국가산업단지 480여개 사전입주의향서 확보 <br />도안신도시 직주근접 프리미엄의 중심<br />" },
	{ img: section2Image2, titleText: "베스트 아파트 브랜드 1위<br />63개월 연속 브랜드평판 1위", contentText: "현대건설 힐스테이트 프리미엄" },
	{ img: section2Image3, titleText: "수도권 시내·외를 더 빠르게<br />광역으로 통하는 특급 교통", contentText: "도안대로 동서대로 유성대로 유성IC <br />현충원IC(추진중)<br /> 반경 1KM내 트램역(예정)으로 편리한 교통망" },
	{ img: section2Image4, titleText: "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />모두 갖춘 중심생활", contentText: "단지 인근 초,중학교 신설예정<br />복용초,유성중 · 고 등 우수한 교육인프라" },
	{ img: section2Image5, titleText: "공원형 라이프<br />프리미엄 아파트", contentText: "단지인근 약 16만㎡ 대규모 채육공원 및 녹지조성 예정<br /> 모든 단지에서 누리는<br /> 진잠천과 화산천 수변공원 " },
	{ img: section2Image6, titleText: "압도적 규모의 걸맞는<br />커뮤니티 구성", contentText: " <br />단지규모 차이는 “가격 차이”, 커뮤니티 차이는 “품격 차이”" },
]

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
				<div>도안신도시의 메인으로 사는</div>
				<div>힐스테이트 도안리버파크의 원탑 라이프의 시작!</div>
				<div>찬란한 비전에 완벽한 주거가치까지 더해 대전을 대표하는 프리미엄 라이프를 시작하다</div>
			</div>

			<img src={page1} className={styles.locationImg} alt="lacation-image-1" />
			<img src={page2} className={styles.locationImg}alt="lacation-image-2" />

			<div className={styles.section2}>
				{LocationSection.map((value, idx) => (
					<LocationSectionBox
						image={value.img}
						title={value.titleText}
						text={value.contentText}
					/>
				))}
			</div>

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 기재된 개발계획은 사업주체, 국가기관, 지자체 및 기타 기관의 사업추진 중 변경 및 지연 또는 취소될 수 있으며, 이는 사업주체와 무관함을 알려드립니다.
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

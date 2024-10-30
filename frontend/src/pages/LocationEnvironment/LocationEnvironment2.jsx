import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";
import page2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
import page3 from "../../assets/LocationEnvironment/LocationEnvironment2/page3.jpg";

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
			<Helmet>
				<title>프리미엄 - 위파크제주</title>
				<meta name="description" content="고급 마감재와 세련된 디자인이 돋보이는 평택 브레인시티 푸르지오는 프리미엄 주거 공간을 제공합니다. 
				탁월한 건축 품질과 고급 시설이 조화롭게 어우러져 있습니다." />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/LocationEnvironment/primium" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
           			<div>제주 오븡동의 중심 눈부신 가치 위에</div>
           		 	<div>제주위파크의 새로운 자부심으로 찾아옵니다.</div>
         		</div>

			<img src={page1} className={styles.premiumImage} alt="premium-image-1" />
			<img src={page2} className={styles.premiumImage} alt="premium-image-3" />
			<img src={page3} className={styles.premiumImage} alt="premium-image-2" />

			<div className={styles.commonBox}>
			<div className={styles.notice}>
				※ 상기 CG 이미지, 사진 및 내용은 소비자의 이해를 돕기 위한 것으로 분양대상물을 축소 표현하여 실제 크기 및 거리 등과 차이가 있습니다.
                </div>
				<div className={styles.notice}>
				※ 단지를 제외한 기타배경(산, 조명, 외부 식재 등)은 소비자의 이해를 돕기 위한 이미지컷으로 실제와 차이가 있습니다.
                </div>
				<div className={styles.notice}>
				※ 건물의 색채, 외관, 조경, 식재 및 보행로는 입주자의 이해를 돕기 위한 것으로 실제와 다소 차이가 있으며, 추후 인허가 과정 및 실제 시공 시 변경될 수 있습니다. 또한 구획선과 시설물의 위치 및 규모 역시 측량결과 및 각종 평가에 따라 시공 시 변경될 수 있습니다.	
                </div>
				<div className={styles.notice}>
				※ 본 홈페이지의 제작과정상 오탈자가 있을 수 있으므로 계약 시 반드시 확인하시기 바랍니다.
                </div>
			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

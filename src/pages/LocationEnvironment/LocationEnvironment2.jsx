import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
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

					<Helmet>
					<title>평택브레인시티수자인 - 프리미엄</title>
					<meta name="description" content="평택브레인시티수자인의 프리미엄 페이지에서는 이 아파트가 제공하는 다양한 고급 특화 시설과 혜택을 소개합니다. 특화 설계, 고급 자재, 입주자 전용 서비스를 통해 더 나은 생활을 제공합니다. 프리미엄 세부 사항을 확인하고 이 아파트에서 제공하는 차별화된 가치를 경험하세요." />
					<meta property="og:title" content="평택브레인시티수자인 - 프리미엄" />
					<meta property="og:description" content="평택브레인시티수자인의 프리미엄 페이지에서는 이 아파트가 제공하는 다양한 고급 특화 시설과 혜택을 소개합니다. 특화 설계, 고급 자재, 입주자 전용 서비스를 통해 더 나은 생활을 제공합니다. 프리미엄 세부 사항을 확인하고 이 아파트에서 제공하는 차별화된 가치를 경험하세요." />
					<meta property="og:image" content="https://www.vaaclubs.com/Main1.png" />
					<meta property="og:url" content="https://www.vaaclubs.com/LocationEnvironment/primium" />
					<meta name="twitter:title" content="평택브레인시티수자인 - 프리미엄" />
					<meta name="twitter:description" content="평택브레인시티수자인의 프리미엄 페이지에서는 이 아파트가 제공하는 다양한 고급 특화 시설과 혜택을 소개합니다. 특화 설계, 고급 자재, 입주자 전용 서비스를 통해 더 나은 생활을 제공합니다. 프리미엄 세부 사항을 확인하고 이 아파트에서 제공하는 차별화된 가치를 경험하세요." />
					<meta name="twitter:image" content="https://www.vaaclubs.com/Main1.png" />
					<meta name="twitter:url" content="https://www.vaaclubs.com/LocationEnvironment/primium" />
					</Helmet> 	
			
			

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>평택브레인시티수자인 - 프리미엄</h1>
			<p className={styles.screenReaderOnly}>평택브레인시티수자인의 프리미엄 페이지에서는 이 아파트가 제공하는 다양한 고급 특화 시설과 혜택을 소개합니다. 특화 설계, 고급 자재, 입주자 전용 서비스를 통해 더 나은 생활을 제공합니다. 프리미엄 세부 사항을 확인하고 이 아파트에서 제공하는 차별화된 가치를 경험하세요.

			</p>


			<div className={styles.textBox}>
				<div>브레인시티의 눈부신 가치 위에</div>
				<div>평택 브레인시티 수자인의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			<img src={page1} className={styles.image3} alt="평택브레인시티수자인프리미엄안내-image1" />

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

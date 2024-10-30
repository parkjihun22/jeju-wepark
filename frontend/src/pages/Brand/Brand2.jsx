import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import Ready from "../../components/Ready/Ready";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }]
	const [isScroll, setIsScroll] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행
	// 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환

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
				<title>홍보 영상 - 위파크 제주</title>
				<meta name="description" content="위파크제주의 홍보 영상을 확인해보세요" />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="http://www.apt-789.com/Brand/video" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="브랜드 소개" />

			<MenuBar contents={menuContents} />

			<Ready />
			{/* <div className={styles.videoContainer}>
				<YouTube
					videoId="-Zk2cRasQBY"
					opts={{
						width: isMobile ? "350vw" : "1000",  // 모바일에서는 100%로 설정
						height: isMobile ? "300" : "500", // 모바일 높이를 고정
						playerVars: {
							autoplay: 1,        // 자동 재생
							rel: 0,             // 관련 동영상 표시하지 않음
							modestbranding: 1,  // 컨트롤 바에 YouTube 로고를 표시하지 않음
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div> */}

			<Footer />
		</div>
	)
}

export default Brand2;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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

 					<Helmet>
					<title>평택브레인시티수자인 - 홍보영상</title>
					<meta name="description" content="평택브레인시티수자인의 홍보 영상은 이 프로젝트의 주요 특징과 장점을 시각적으로 잘 전달하는 매체입니다. 고품질의 영상으로 이 단지의 설계, 입지, 편의 시설 등 다양한 요소를 소개하며, 분양을 고민하는 고객들에게 유익한 정보를 제공합니다. 영상 시청을 통해 평택브레인시티수자인의 매력을 더 깊이 이해할 수 있습니다." />
					<meta property="og:title" content="평택브레인시티수자인 - 홍보영상" />
					<meta property="og:description" content="평택브레인시티수자인의 홍보 영상은 이 프로젝트의 주요 특징과 장점을 시각적으로 잘 전달하는 매체입니다. 고품질의 영상으로 이 단지의 설계, 입지, 편의 시설 등 다양한 요소를 소개하며, 분양을 고민하는 고객들에게 유익한 정보를 제공합니다. 영상 시청을 통해 평택브레인시티수자인의 매력을 더 깊이 이해할 수 있습니다." />
					<meta property="og:image" content="https://www.vaaclubs.com/Main1.png" />
					<meta property="og:url" content="https://www.vaaclubs.com/Brand/video" />
					<meta name="twitter:title" content="평택브레인시티수자인 - 홍보영상" />
					<meta name="twitter:description" content="평택브레인시티수자인의 홍보 영상은 이 프로젝트의 주요 특징과 장점을 시각적으로 잘 전달하는 매체입니다. 고품질의 영상으로 이 단지의 설계, 입지, 편의 시설 등 다양한 요소를 소개하며, 분양을 고민하는 고객들에게 유익한 정보를 제공합니다. 영상 시청을 통해 평택브레인시티수자인의 매력을 더 깊이 이해할 수 있습니다." />
					<meta name="twitter:image" content="https://www.vaaclubs.com/Main1.png" />
					<meta name="twitter:url" content="https://www.vaaclubs.com/Brand/video" />
					</Helmet>  
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>평택브레인시티수자인 - 홍보영상</h1>
			<p className={styles.screenReaderOnly}>평택브레인시티수자인의 홍보 영상은 이 프로젝트의 주요 특징과 장점을 시각적으로 잘 전달하는 매체입니다. 고품질의 영상으로 이 단지의 설계, 입지, 편의 시설 등 다양한 요소를 소개하며, 분양을 고민하는 고객들에게 유익한 정보를 제공합니다. 영상 시청을 통해 평택브레인시티수자인의 매력을 더 깊이 이해할 수 있습니다.
			</p>

			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>브레인시티 수자인이 눈부신 가치 위에</div>
                <div>새로운 자부심으로 찾아옵니다.</div>
            </div>

			<div className={styles.videoContainer}>
				<YouTube
					videoId="jziyaoDz2Ns"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;

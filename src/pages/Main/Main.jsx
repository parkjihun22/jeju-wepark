import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import styles from "./Main.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import Popup from "../../components/MobilePopup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";

import mainImage from "../../assets/Main/Main1.jpg"; 
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

const section3Contents = [
	{
		imgSrc: section3_Image1,
		title: "PREMIUM 01",
		text1: `브레인시티 의세권의중심`,
		text2: `브레인시티 수자인`,
		link: "/BusinessGuide/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section3_Image2,
		title: "PREMIUM 02",
		text1: `앞선 직주근접 라이프`,
		text2: `세계최대규모 160만평 규모의 삼성전자 평택캠퍼스<br />
			  송탄·칠괴 산단,KG모빌리티 등`,
		link: "/LocationEnvironment/intro", 
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section3_Image3,
		title: "PREMIUM 03",
		text1: `평택 개발호재의 핵심입지`,
		text2: `카이스트 평택캠퍼스(예정)<br />
				아주대 평택병원(예정)`,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section3_Image4,
		title: "PREMIUM 04",
		text1: `원스톱으로 누리는 인프라`,
		text2: `평택지제역 KTX, GTX A·C(예정)<br />
			  단지앞 초등학교(예정),대형마트`,
		link: "/LocationEnvironment/primium",
		linkText: "더 알아보기 >"
	}
];

const Main = () => {
	const [isScroll, setIsScroll] = useState(false);
	const [page, setPage] = useState(1); // 페이지 세션 번호
	const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중인지 여부 확인
	const [isOpenPopup1, setIsOpenPopup1] = useState(true);
	const [isOpenPopup2, setIsOpenPopup2] = useState(true);
	const [isOpenPopup3, setIsOpenPopup3] = useState(true);
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	// 화면 스크롤이 탑이 아니면 isScroll 값을 true로 변환
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

	// PC에서만 페이지 전환 스크롤 이벤트 처리
	useEffect(() => {
		if (isMobile) return; // 모바일에서는 휠 이벤트를 사용하지 않음

		const handleWheel = (e) => {
			e.preventDefault();

			if (isScrolling) return; // 스크롤 중일 때 추가 스크롤 막음

			setIsScrolling(true); // 스크롤 중 플래그 설정

			if (e.deltaY > 0) {
				// 스크롤 다운
				if (page < 8) {
					setPage((prevPage) => prevPage + 1);
				}
			} else {
				// 스크롤 업
				if (page > 1) {
					setPage((prevPage) => prevPage - 1);
				}
			}

			// 일정 시간 후 스크롤 가능하도록 플래그 해제
			setTimeout(() => {
				setIsScrolling(false);
			}, 500); // 스크롤 완료 후 대기 시간 설정 (800ms)
		};

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [page, isScrolling, isMobile]);

	// 페이지 세션에 따른 스크롤 이동 (PC에서만 적용)
	useEffect(() => {
		if (isMobile) return; // 모바일에서는 자동 스크롤을 사용하지 않음

		const posTop = (page - 1) * window.innerHeight;
		window.scrollTo({
			top: posTop,
			behavior: 'smooth'
		});
	}, [page, isMobile]);

	return (
		<>
			{!isMobile ? (

				<>
					
					<Header isChanged={isScroll} />
					{isOpenPopup1 && <Popup onClosed={() => setIsOpenPopup1(false)} popupImage={isMobile ? mobilePopupPage1 : popupPage1} numbering={1} />}
					{!isOpenPopup1 && isOpenPopup2 && <Popup onClosed={() => setIsOpenPopup2(false)} popupImage={isMobile ? mobilePopupPage2 : popupPage2} numbering={2} />}
					{!isOpenPopup2 && isOpenPopup3 && <Popup onClosed={() => setIsOpenPopup3(false)} popupImage={isMobile ? mobilePopupPage3 : popupPage3} numbering={3} />}

					<div className={styles.imageContainer}>
						<img src={mainImage} className={styles.mainImage} />
						<div className={styles.overlay}></div>
						<div className={styles.mainImageTextBox}>
							<div className={styles.mainImageTextSub}>12월 13일 GRAND OPEN</div> 
							<div className={styles.mainImageTitleBox}>
								<div className={styles.mainImageText}>평택이 기다린 단 하나의 착한아파트</div>
								<div className={styles.mainImageLine}></div>
								<div className={styles.mainImageText}>평택 브레인시티 수자인</div>
							</div>
						</div>

						<FixIcon type="absolute" />
					</div>

					<div className={styles.section}>
						<div className={styles.section1}>

							<div className={styles.textBox}>
								<div className={styles.text1}>Location</div>
								<div className={styles.text2}>" 방문 예약 고객 전원 스타벅스 기프티콘 100% 증정 "</div>
								<div className={styles.text3}>- 브레인시티 중심상업지구 매우인접 <br />
									- 첨단 아주대학교 종합병원 도보 5분 <br />
									- 평택 지제역 1호선, STR, KTX, GTX-A · C 확정으로 펜타역세권 <br />
									- 모두를 누리는 평택 브레인시티 수자인
								</div>

								<div className={styles.text4}>
									<a href="https://naver.me/G58kVeiB" target="_black"> 관심고객 등록하기 {'>'} </a>
								</div>
							</div>

							<div className={styles.menuBox}>
								<img src={section1_Image1} />
								<Link to="/Brand/video" className={styles.btn}> 브랜드 소개 {'>'} </Link>
							</div>
						</div>
					</div>
					

				<div className={styles.section}>
					<div className={styles.section8}>

						<div className={styles.textBox}>
								<div className={styles.title}>
									소수만 누릴 수 있는<br />
									<span>착한가격의 아파트 브레인시티 수자인</span>
								</div>
								<div className={styles.subTitle}>
									<div className={styles.textLine}></div>
									<div className={styles.subText}>
										찬란한 비전에 완벽한 주거가치까지 더해<br />
										브레인시티 수자인이 함께합니다  
									</div>
								</div>
							</div>

							<img src={section8Img3} alt="Section 8 Image" />
						</div>
					</div>
					
					
					<div className={styles.section}>
						<div className={styles.section2}>
							<div className={styles.textBox}>
								<div className={`${styles.text1} fadeUpRepeat`}>완벽한 생활에서 준비된 미래까지</div>
								<div className={`${styles.text2} fadeUpRepeat`}>기대한 모든 프리미엄이<br />평택 브레인시티 수자인에서 펼쳐집니다</div>
								<div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
								<div className={`${styles.text4} fadeUpRepeat`}>살수록 자부심이 차원이 다른 <br />프리미엄 주거라이프를 실현합니다</div>
								<div className={`${styles.text5} fadeUpRepeat`}>주거의 품격과 가치를 높이는 <span>특화설계</span> <br />안전한 이동을 위한 세심한 <span>단지설계</span> <br />편리한 생활을 위한 최적의 <span>공간설계</span></div>
							</div>
							<img src={section2_Image1} />
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section3}>
							{section3Contents.map((section, index) => (
								<div key={index} className={styles.box}>
									<img src={section.imgSrc} alt={section.title} />
									<div className={styles.boxTitle}>{section.title}</div>
									<div className={styles.boxText1} dangerouslySetInnerHTML={{ __html: section.text1 }} />
									<div className={styles.boxText2} dangerouslySetInnerHTML={{ __html: section.text2 }} />
									<Link to={section.link} className={styles.boxText3}>
										{section.linkText}
									</Link>
								</div>
							))}
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section4}>
							<div className={styles.imageBox}>
								<img src={section4_Image1} />

								<div className={styles.text1}>평택 브레인시티 수자인</div>
								<div className={styles.text2}>THE NATURAL NOBILITY</div>
								<div className={styles.text3}>당신의 삶, 그 고귀함이 계속되길</div>
							</div>
							<div className={styles.textBox}>
								<div className={styles.text1}>UNITPLAN</div>
								<UnitplanBox />
								<Link to="/FloorPlan/84A" className={styles.text2}>더 알아보기 {'>'}</Link>
							</div>
						</div>

						<div className={styles.section}>
							
						<div className={styles.section9}>
						<div className={styles.textBox}>
								<div className={styles.title}>
									평택 브레인시티 수자인<br />
									<span>견본주택 오시는길</span>
								</div>
								<div className={styles.subTitle}>
									<div className={styles.textLine}></div>
									<div className={styles.subText}>
										찬란한 비전에 완벽한 주거가치까지 더해<br />
										평택 브레인시티 수자인이 함께합니다  
									</div>
								</div>
							</div>
						<img src={map1} alt="map img1" />
						</div>

						</div>
					</div>

					<div className={styles.section5}>
						<Footer />
					</div>

				</>
			) : (
				<div className={styles.mobileMain}>
					{isOpenPopup1 && <Popup onClosed={() => setIsOpenPopup1(!isOpenPopup1)} popupImage={mobilePopupPage1} numbering={1} />}
					{isOpenPopup2 && <Popup onClosed={() => setIsOpenPopup2(!isOpenPopup1)} popupImage={mobilePopupPage2} numbering={2} />}
					{isOpenPopup3 && <Popup onClosed={() => setIsOpenPopup3(!isOpenPopup1)} popupImage={mobilePopupPage3} numbering={3} />}
					
					<Header isChanged={isScroll} />

					<div className={styles.imageContainer}>
						
						<img src={mobileImageMain} className={styles.mainImage} />
						<div className={styles.overlay}></div>
						<div className={styles.mainImageTextBox2}>
							<div className={styles.mainImageTextSub}>평택 브레인시티<br/> 의세권의 중심</div>
							<div className={styles.mainImageTitle}>
								브레인시티가 기다린

								</div>
							<div className={styles.mainImageText}>브레인시티 수자인</div>
						</div>
					</div>

					<div className={styles.container1}>

						<div className={styles.text1}>Location</div>
						<div className={styles.text2}>"방문예약을 하시면 신세계 상품권 100% 증정 "</div>
						<div className={styles.text3}>- 브레인시티 중심상업지구 가장인접한 입지 <br />
							- 첨단 아주대학교 AI종합병원, 의료R＆D센터 도보 5분 <br />
							- 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원 <br />
							- 모두를 누리는 반도체밸리 주거 타운의 완성
						</div>

						<div className={styles.text4}>
							<a href="https://naver.me/G58kVeiB" target="_black"> 관심고객 등록하기 {'>'} </a>
						</div>

					</div>

					<div className={styles.container7}>

						<div className={styles.textBox}>
							<div className={styles.title}>
								평택 브레인시티의 중심으로 사는<br />
								<span>착한 가격의 분상제 아파트</span>
							</div>
							<div className={styles.subTitle}>
								<div className={styles.textLine}></div>
								<div className={styles.subText}>
								완벽한 비전중심에서 완벽한 주거가치까지 더해<br />
								브레인시티 수자인이 함께합니다
								</div>
							</div>
						</div>

						<img src={section8Img3} alt="Section 8 Image" />
					</div>

					<div className={styles.container3}>
						<div className={styles.textbox}>
							<div className={`${styles.text1} fadeUpRepeat`}>완벽한 생활에서 준비된 미래까지</div>
							<div className={`${styles.text2} fadeUpRepeat`}>기대한 모든 프리미엄이<br />평택 브레인시티 수자인에서 펼쳐집니다</div>
							<div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
							<div className={`${styles.text4} fadeUpRepeat`}>살수록 자부심이 차원이 다른 <br />프리미엄 주거라이프를 브레인시티 수자인 모델하우스에서 확인하세요</div>
						</div>

						<img src={section2_Image1} />
					</div>

					<div className={styles.container4}>
						<div className={styles.text1}>UNITPLAN</div>
						<UnitplanBox />
						<Link to="/FloorPlan/84A" className={styles.text2}>
							<div>더 알아보기 &gt;</div>
						</Link>
					</div>

					<div className={styles.container6}>
						{section3Contents.map((section, idx) => (
							<MobileSectionBox
								key={idx}
								type={idx % 2 === 0 ? 'left' : 'right'}
								titleImag={section.imgSrc}
								title={section.title}
								subText1={section.text1}
                				subText2={section.text2}
							/>
						))}
					</div>

					<div className={styles.container5}>
						<img src={section4_Image1} />

						<div className={styles.text1}>브레인시티 수자인</div>
						<div className={styles.text2}>THE NATURAL NOBILITY</div>
						<div className={styles.text3}>당신의 삶, 그 고귀함이 계속되길</div>
					</div>

					<div className={styles.container2}>
						<div>
							<img src={section1_Image1} />
							<Link to="/Brand/intro" className={styles.btn}> 브랜드 소개 {'>'} </Link>
						</div>
					</div>
					<div className={styles.section}>
						<div className={styles.section9}>
						<img src={mobilemap1} alt="map img1" />
						</div>
					</div>

					
					

					<div className={styles.section5}>
						<Footer />
						<FixIcon />
					</div>
				</div >
			)}
		</>
	);
}

export default Main;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
// import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import styles from "./Main.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";

import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.png";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section4_Image1 from "../../assets/Main/section4-img1.png";
import section4_Image2 from "../../assets/Main/section4-img2.png";
import section4_Image3 from "../../assets/Main/section4-img3.png";
import section4_Image4 from "../../assets/Main/section4-img2.png";
import section5_Image1 from "../../assets/Main/section5-img1.jpg";
// import section4_Image2 from "../../assets/Main/section4-img2.jpg";
// import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";

const section4Contents = [
	{
		imgSrc: section4_Image1,
		title: "VISION",
		text1: `핵심 배후단지의 중심`,
		text2: `한라산 아래 가장 큰 랜드마크 <br/>
				초대형 복합문화 주거도시의 시작 `,
		link: "/BusinessGuide/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section4_Image2,
		title: "INFRA",
		text1: `원스톱 인프라`,
		text2: `대형마트,학교,병원,은행,극장 등 <br/>
				제주의 다양한 생활 인프라 이용 가능 `,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section4_Image3,
		title: "TRAFFIC",
		text1: `제주를 잇는 편리한 교통망`,
		text2: `연북로, 오남로와 인접하여 제주 어디로든<br />
			  	빠르고 편리하게 이동 가능`,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section4_Image4,
		title: "PREMIUM",
		text1: `쾌적한 자연환경`,
		text2: `오등봉공원, 시민복지타운광장, 한천 등<br />
		  		천혜의 자연을 누리는 쾌적한 주거환경`,
		link: "/LocationEnvironment/primium",
		linkText: "더 알아보기 >"
	}
];

const Main = () => {
	const [isScroll, setIsScroll] = useState(false);
	const [page, setPage] = useState(1); // 페이지 세션 번호
	const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중인지 여부 확인
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
				if (page < 7) {
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
			}, 800); // 스크롤 완료 후 대기 시간 설정 (800ms)
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

					<div className={styles.imageContainer}>
						<img src={mainImage} className={styles.mainImage} />
						<div className={styles.mainImageTextBox}>
							<div className={styles.mainImageText1}>제주 최중심 공원 특화 프리미엄 아파트, WEPARK</div>
							<div className={styles.mainImageText2}>총 1,401세대 제주 최대 스케일로 찾아옵니다</div>
							<div className={styles.mainImageText3}><span>WEPARK</span> 제주</div>
						</div>

						<FixIcon type="absolute" />	
					</div>

					<div className={styles.section}>
						<div className={styles.section1}>

							<div className={styles.textBox}>
								<div className={styles.text1}>Location</div>
								<div className={styles.text2}>" 방문 예약 고객 전원 신세계 상품권 100% 증정 "</div>
								<div className={styles.text3}>- 모두의 부러움이될 제주 위파크   <br />
									- 제주 최대규모 1,401세대 <br />
									- 제주 최중심 공원 특화 프리미엄 아파트 WEPARK <br />
									- 제주를 잇는 편리한 교통망 연북로, 오남로와 인접하여 제주 어디로든
									빠르고 편리하게 이동 가능
								</div>

								<div className={styles.text4}>
									<a href="https://naver.me/IxsZav7h" target="_black"> 관심고객 등록하기 {'>'}</a>
								</div>
							</div>

							<div className={styles.menuBox}>
								<div className={styles.text}><span>호반건설</span> 위파크 제주</div>
								<Link to="brand/intro" className={styles.btn}> 브랜드 소개 {'>'}</Link>
							</div>
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section2}>

							<div className={styles.textBox}>
								<div className={styles.title}>
									제주의 중심에사는<br />
									<span>원탑 라이프의 시작!</span>
								</div>
								<div className={styles.subTitle}>
									<div className={styles.textLine}></div>
									<div className={styles.subText}>
										찬란한 비전에 완벽한 주거가치까지 더해<br />
										제주을 대표하는 프리미엄 라이프를 시작하다
									</div>
								</div>
							</div>

							<img src={section2_Image1} alt="" />
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section3}>
							<div className={styles.textBox}>
								<div className={`${styles.text1} fadeUpRepeat`}>완벽한 생활에서 준비된 미래까지</div>
								<div className={`${styles.text2} fadeUpRepeat`}>기대한 모든 프리미엄이<br />제주 위파크에서 펼쳐집니다</div>
								<div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
								<div className={`${styles.text4} fadeUpRepeat`}>살수록 자부심이 차원이 다른 <br />프리미엄 주거라이프를 실현합니다</div>
								<div className={`${styles.text5} fadeUpRepeat`}>주거의 품격과 가치를 높이는 <span>특화설계</span> <br />안전한 이동을 위한 세심한 <span>단지설계</span> <br />편리한 생활을 위한 최적의 <span>공간설계</span></div>
							</div>
							<img src={section3_Image1} />
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section4}>
							{section4Contents.map((section, index) => (
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
						<div className={styles.section5}>
							<div className={styles.imageBox}>
								<img src={section5_Image1} />

								<div className={styles.text1}>제주의 중심 제주 위파크 </div>
								<div className={styles.text2}>THE NATURAL NOBILITY</div>
								<div className={styles.text3}>당신의 삶, 그 고귀함이 계속되길</div>
							</div>
							<div className={styles.textBox}>
								<div className={styles.text1}>UNITPLAN</div>
								<UnitplanBox />
								<Link to="/FloorPlan/59A" className={styles.text2}>더 알아보기{'>'}</Link>
							</div>
						</div>
					</div>

					<div className={styles.section6}>
						<Footer />
					</div>

				</>
			) : (
				<div className={styles.mobileMain}>
					<Header isChanged={isScroll} />

					<div className={styles.imageContainer}>
						<img src={mobileImageMain} className={styles.mainImage} />
						<div className={styles.overlay}></div>
						<div className={styles.mainImageTextBox}>
							<div className={styles.mainImageTitle}>제주 최중심 공원 특화<br/> 프리미엄 아파트 WEPARK</div>
							<div className={styles.mainImageTextSub}>
								총 1,401세대 제주 최대 스케일<br />
								최고의 중심입지 프리미엄으로 찾아옵니다
					
							</div>
							<div className={styles.mainImageLine}></div>
							<div className={styles.mainImageText}>GRAND OPEN</div>
						</div>
					</div>

					<div className={styles.container1}>

						<div className={styles.text1}>Location</div>
						<div className={styles.text2}>" 방문 예약 고객 전원 신세계 상품권 100% 증정 "</div>
						<div className={styles.text3}>- 모두의 부러움이될 제주 위파크   <br />
									- 제주 최대규모 1,401세대 <br />
									- 제주 최중심 공원 특화 프리미엄 아파트 WEPARK <br />
									- 제주를 잇는 편리한 교통망 연북로, 오남로와 인접하여<br/> 제주 어디로든
									빠르고 편리하게 이동 가능
								</div>

						<div className={styles.text4}>
							<a href="https://naver.me/IxsZav7h" target="_black"> 관심고객 등록하기 {'>'}</a>
						</div>

					</div>

						<div className={styles.container7}>

							<div className={styles.textBox}>
								<div className={styles.title}>
									제주의 중심으로 사는<br />
									<span>원탑 라이프의 시작!</span>
								</div>
								<div className={styles.subTitle}>
									<div className={styles.textLine}></div>
									<div className={styles.subText}>
										찬란한 비전에 완벽한 주거가치까지 더해<br />
										제주을 대표하는 프리미엄 라이프를 시작하다
									</div>
								</div>
							</div>

							<img src={section2_Image1} alt="" />
						</div>
					<div className={styles.container3}>
						<div className={styles.textbox}>
							<div className={`${styles.text1} fadeUpRepeat`}>완벽한 생활에서 준비된 미래까지</div>
							<div className={`${styles.text2} fadeUpRepeat`}>기대한 모든 프리미엄이<br /> 제주 위파크에서 펼쳐집니다</div>
							<div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
							<div className={`${styles.text4} fadeUpRepeat`}>살수록 자부심이 차원이 다른 <br />프리미엄 주거라이프를 실현합니다</div>
							<div className={`${styles.text5} fadeUpRepeat`}>주거의 품격과 가치를 높이는 <span>특화설계</span> <br />안전한 이동을 위한 세심한 <span>단지설계</span> <br />편리한 생활을 위한 최적의 <span>공간설계</span></div>
						</div>

						<img src={section3_Image1} />
					</div>

					<div className={styles.container4}>
						<div className={styles.text1}>UNITPLAN</div>
						<UnitplanBox />
						<Link to="/FloorPlan/84A" className={styles.text2}>
							<div>더 알아보기 {'>'}</div>
						</Link>
					</div>

					<div className={styles.container6}>
						{section4Contents.map((section, idx) => (
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
						<img src={section5_Image1} />

						<div className={styles.text1}>제주의 중심 WEPARK</div>
						<div className={styles.text2}>THE NATURAL NOBILITY</div>
						<div className={styles.text3}>당신의 삶, 그 고귀함이 계속되길</div>
					</div>

					<div className={styles.container2}>
						<div>
							<img src={section1_Image1} />
							<Link to="brand/intro" className={styles.btn}> 브랜드 소개 {'>'}</Link>
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

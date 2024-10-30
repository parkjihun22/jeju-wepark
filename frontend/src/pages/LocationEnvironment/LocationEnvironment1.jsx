import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

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
    { img: section2Image1, titleText: "제주도 최대규모 1,401세대 대단지", contentText: "세대당 주차대수 1,81대로 여유로운 주차공간<br />" },
    { img: section2Image2, titleText: "제주도 핵심배우입지 <br />각종 인프라의 중심", contentText: "대형마트, 학교, 병원, 은행, 극장 등<br/>제주의 다양한 생활 인프라 이용 가능" },
    { img: section2Image3, titleText: "제주도 시내·외를 더 빠르게<br />광역으	로 통하는 특급 교통", contentText: "연북로, 오남로와 인접하여 제주 어디로든<br />빠르고 	편리하게 이동 가능" },
    { img: section2Image4, titleText: "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />모두 갖춘 중심생활", contentText: "단지 사이에 위치한 아트센터, 한라도서관 및연동학원가, 이도학원가 이용 가능" },
    { img: section2Image5, titleText: "제주 최중심 공원 특화 프리미엄 아파트 <br/> WEPARK", contentText: "오등봉공원, 시민복지타운광장, 한천 등<br /> 천혜의 자연을 누리는 쾌적한 주거환경	" },
    { img: section2Image6, titleText: "제주도 최대규모 세대수에 <br /> 걸맞는 커뮤니티 구성", contentText: " <br />단지규모 차이는 “가격 차이”, 커뮤니티 차이는 “품격 차이”" },
];

const LocationEnvironment1 = () => {
    const menuContents = [
        { title: "입지안내", url: "/LocationEnvironment/intro" },
        { title: "프리미엄", url: "/LocationEnvironment/primium" }
    ];
    
    const [isScroll, setIsScroll] = useState(false);
    const { pathname } = useLocation();
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const [isVisible, setIsVisible] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);

            if (descriptionRef.current) {
                const rect = descriptionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
				<title>입지안내 - 위파크제주</title>
				<meta name="description" content="제주위파크의 중심에 위치한 푸르지오는 우수한 입지 조건과 탁월한 접근성을 자랑합니다. 
				주변의 교육, 쇼핑, 엔터테인먼트 시설과의 근접성이 일상의 편리함을 보장합니다" />
				<meta name="keywords" content="위파크 제주,위파크 제주 분양가,제주 오등봉공원 위파크,제주 위파크,제주시 오라이동 위파크,제주도 위파크,위파크제주모델하우스,제주위파크모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/LocationEnvironment/intro" />
			</Helmet>


            <Header isChanged={isScroll} />
            <FixIcon />
            <Bener title="입지환경" />
            <MenuBar contents={menuContents} />

            <div className={styles.textBox}>
                <div>서제주 · 동제주 동시 생활권</div>
                <div>위파크 제주의 원탑 라이프의 시작!</div>
                <div>제주의 완벽한 중심</div>
            </div>

            <img src={page1} className={styles.locationImg} alt="location-image-1" />
            <div ref={descriptionRef} className={`${styles.description} ${isVisible ? styles.visible : ''}`}>
                도시의 편리한 생활과 천혜의자연을 누리는<br/>제주 최중심에 위파크를 선보입니다
            </div>
        
            <img src={page2} className={styles.locationImg} alt="location-image-2" />

            <div className={styles.section2}>
                {LocationSection.map((value, idx) => (
                    <LocationSectionBox
                        key={idx}
                        image={value.img}
                        title={value.titleText}
                        text={value.contentText}
                    />
                ))}
            </div>

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
    );
};

export default LocationEnvironment1;

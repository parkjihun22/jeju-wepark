import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/page1.jpg";
import page2 from "../../assets/BusinessGuide/documents/page2.jpg";
import page3 from "../../assets/BusinessGuide/documents/page3.jpg";
import page4 from "../../assets/BusinessGuide/documents/page4.jpg";
import page5 from "../../assets/BusinessGuide/documents/page5.jpg";
import page6 from "../../assets/BusinessGuide/documents/page6.jpg";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "당첨자서류안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
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
			<Bener title="사업개요" />
			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>평택 브레인시티의 눈부신 가치 위에</div>
				<div>평택 브레인시티 수자인의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 서류 안내 옵션 버튼들 */}
			<div className={styles.optionSelector}>
				<button
					onClick={() => setSelectedOption(1)}
					className={`${styles.button} ${selectedOption === 1 ? styles['active'] : ''}`}
				>
					일반공급
				</button>
				<button
					onClick={() => setSelectedOption(2)}
					className={`${styles.button} ${selectedOption === 2 ? styles['active'] : ''}`}
				>
					기관추천
				</button>
				<button
					onClick={() => setSelectedOption(3)}
					className={`${styles.button} ${selectedOption === 3 ? styles['active'] : ''}`}
				>
					다자녀가구
				</button>
				<button
					onClick={() => setSelectedOption(4)}
					className={`${styles.button} ${selectedOption === 4 ? styles['active'] : ''}`}
				>
					신혼부부
				</button>
				<button
					onClick={() => setSelectedOption(5)}
					className={`${styles.button} ${selectedOption === 5 ? styles['active'] : ''}`}
				>
					노부모부양
				</button>
				<button
					onClick={() => setSelectedOption(6)}
					className={`${styles.button} ${selectedOption === 6 ? styles['active'] : ''}`}
				>
					생애최초
				</button>
			</div>

			{/* 선택된 옵션에 따라 이미지 표시 */}
			<div className={styles.imageContainer}>
				{selectedOption === 1 && <img src={page1} className={styles.img1} alt="일반공급" />}
				{selectedOption === 2 && <img src={page2} className={styles.img1} alt="기관추천" />}
				{selectedOption === 3 && <img src={page3} className={styles.img1} alt="다자녀가구" />}
				{selectedOption === 4 && <img src={page4} className={styles.img1} alt="신혼부부" />}
				{selectedOption === 5 && <img src={page5} className={styles.img1} alt="노부모부양" />}
				{selectedOption === 6 && <img src={page6} className={styles.img1} alt="생애최초" />}
			</div>


			<Footer />
		</div>
	);
};

export default BusinessGuide2;

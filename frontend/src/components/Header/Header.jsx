import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "./Header.module.scss";
import SlideMenu from "../../components/SlideMenu/SlideMenu";
import logoImageHover from "../../assets/logo/mainlogo.png";
import logoImage from "../../assets/logo/mainlogowhite.jpg";

const menuArray = [
	{
		title: "브랜드",
		subMenu: [
			{ subTitle: "브랜드 소개", subUrl: "/Brand/intro" },
			{ subTitle: "홍보 영상", subUrl: "/Brand/video" },
		],
	},
	{
		title: "사업개요",
		subMenu: [
			{ subTitle: "사업안내", subUrl: "/BusinessGuide/intro" },
			{ subTitle: "분양일정", subUrl: "/BusinessGuide/plan" },
			{ subTitle: "계약서류안내", subUrl: "/BusinessGuide/documents" },
		],
	},
	{
		title: "입지환경",
		subMenu: [
			{ subTitle: "입지안내", subUrl: "/LocationEnvironment/intro" },
			{ subTitle: "프리미엄", subUrl: "/LocationEnvironment/primium" },
		],
	},
	{
		title: "단지안내",
		subMenu: [
			{ subTitle: "단지 배치도", subUrl: "/ComplexGuide/intro" },
			{ subTitle: "호수 배치도", subUrl: "/ComplexGuide/detailintro" },
			{ subTitle: "커뮤니티", subUrl: "/ComplexGuide/community" },
		],
	},
	{
		title: "세대안내",
		subMenu: [
			{ subTitle: "59A", subUrl: "/FloorPlan/59A" },
			{ subTitle: "59B", subUrl: "/FloorPlan/59B" },
			{ subTitle: "84A", subUrl: "/FloorPlan/84A" },
			{ subTitle: "84B", subUrl: "/FloorPlan/84B" },
			{ subTitle: "84C", subUrl: "/FloorPlan/114A" },
			{ subTitle: "84D", subUrl: "/FloorPlan/114B" },
		],
	},
	{
		title: "인테리어",
		subMenu: [
			{ subTitle: "59A", subUrl: "/Interior/59A" },
			{ subTitle: "84A", subUrl: "/Interior/84A" },
			{ subTitle: "84B", subUrl: "/Interior/84B" },
		],
	},
];

const Header = ({ isChanged }) => {
	const [isChange, setIsChange] = useState(isChanged);
	const [isMenu, setIsMenu] = useState(false);
	const [isMobileMenu, setIsMobileMenu] = useState(false); // 모바일 메뉴 상태
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	useEffect(() => {
		if (!isMobile) setIsChange(!isChanged);
	}, [isChanged, isMobile]);

	useEffect(() => {
		console.log(isMenu);
	}, [isMenu])

	const handleMouseEnter = () => {
		setIsMenu(!isMenu);
	};

	const handleMouseLeave = () => {
		setIsMenu(!isMenu);
	};

	return (
		<>{!isMobile ? (
			<>
				{!isMenu ? (
					<header
						className={isChange ? styles.containerFirst : styles.container}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>

						<Link to='/'>
							<img src={isChange ? logoImageHover : logoImage} alt="jungheung-class-mainLogo-image" />
						</Link>

						<div className={isChange ? styles.title : styles.scrolledTitle}>
							 힐스테이트 도안리버파크 3,5단지
						</div>

						<div className={styles.itemBox}>
							<a href="https://naver.me/xs350ipu" className={isChange ? styles.linkItem : styles.scrolledLinkItem}>
								모바일 상담예약
							</a>
							{menuArray.map((menu, idx) => (
								<Link key={idx} to={menu.subMenu[0].subUrl} className={isChange ? styles.item : styles.scrolledItem}>
									{menu.title}
								</Link>
							))}
						</div>

						<a href="https://naver.me/xs350ipu" className={isChange ? styles.phoneNumber : styles.scrolledPhoneNumber}>
							<IoCall size={20} /> 1533-8848
						</a>
					</header>
				) : (
					<header
						className={styles.secondContainer}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>

						<Link to='/'>
							<img src={logoImage} alt="jungheung-class-mainLogo-image" />
						</Link>

						<div className={isChange ? styles.title : styles.scrolledTitle}>
							힐스테이트 도안리버파크 3,5단지
						</div>

						<div className={styles.itemBox}>
							<a href="https://naver.me/xs350ipu" className={styles.linkItem}>
								모바일 상담예약
							</a>
							{menuArray.map((menu, idx) => (
								<div key={idx} className={styles.detailItemBox}>
									{/* 첫 번째 메뉴 아이템 */}
									<Link to={menu.subMenu[0].subUrl} className={styles.item}>
										{menu.title}
									</Link>

									{/* 하위 메뉴 아이템 */}
									<div className={styles.secondItemBox}>
										{menu.subMenu.map((submenu, subIdx) => (
											<Link key={subIdx} to={submenu.subUrl} className={styles.subitem}>
												{submenu.subTitle} {/* title -> subTitle로 변경 */}
											</Link>
										))}
									</div>
								</div>
							))}

						</div>

						<a href="https://naver.me/xs350ipuR" className={styles.phoneNumber}>
							<IoCall size={20} /> 1533-8848
						</a>
					</header>
				)}
			</>
		) : (
			<div className={styles.mobileHeader}>

				<div onClick={() => setIsMobileMenu(!isMobileMenu)}>
					{!isMobileMenu ?
						<AiOutlineMenu className={styles.icon} size={20} color="#053b02" />
						:
						<IoCloseSharp className={styles.icon} size={20} color="#053b02" />
					}
				</div>
				{isMobileMenu && <SlideMenu contents={menuArray} />}

				<Link to='/'>
					<img src={logoImage} alt="jungheung-class-mainLogo-image" className={styles.logo} />
				</Link>

				<a href={'tel:1533-8848'}>
					<IoCall className={styles.icon} size={20} color="#053b02" />
				</a>

			</div>
		)}
		</>

	);
};

export default Header;

// {
//
// }

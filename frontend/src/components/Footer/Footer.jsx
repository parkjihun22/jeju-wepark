import React from "react";
import { useMediaQuery } from 'react-responsive';
import { IoCall } from "react-icons/io5";

import styles from "./Footer.module.scss"
import footerlogo from "../../assets/logo/footerlogo.png";

const Footer = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	return (
		<>
			{!isMobile ? (
				<div className={styles.container}>
					<img src={footerlogo} />

					<div className={styles.innerContainer}>
						<div className={styles.textContainer}>
							<div className={styles.text1}>※ 본 사이트에 사용된 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</div>
							<div className={styles.text1}>※ 본 사이트에 기재된 개발계획과 공통계획에 과한 사항은 관계기관의 보도자료를 참조한 것으로 <br />
								추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 사업주체 및 시공사와 무관합니다.</div>

							<div className={styles.text2}>COPYRIGHTⓒ 대전 힐스테이트 도안리버파크 모델하우스. ALL RIGHTS RESERVED.</div>
						</div>

						<a href="https://naver.me/G58kVeiB"><IoCall size={25} /> 1533-8848</a>
					</div>
				</div>
			) : (
				<div className={styles.container}>
					<img src={footerlogo} />

					<div className={styles.innerContainer}>
						<a href="tel: 1533-8848">전화문의 1533-8848</a>

						<div className={styles.textContainer}>
							<div className={styles.text1}>※ 본 사이트에 사용된 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</div>
							<div className={styles.text1}>※ 본 사이트에 기재된 개발계획과 공통계획에 과한 사항은 관계기관의 보도자료를 참조한 것으로 <br />
								추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 사업주체 및 시공사와 무관합니다.</div>

							<div className={styles.text2}>COPYRIGHTⓒ 대전 힐스테이트 도안리버파크 모델하우스. ALL RIGHTS RESERVED.</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Footer

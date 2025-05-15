import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IoCall } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// SCSS 스타일
import styles from "./Footer.module.scss";

// (선택) 팝업 컴포넌트 (필요 없으면 삭제)
import InterestPopup from "../InterestPopup/InterestPopup";

// FAMILY SITE 목록 예시
const partnerSites = [
  { name: "엘리프 세종 5-1", url: "https://www.sekailog.com" },
  { name: "힐스테이트 용인마크밸리", url: "https://www.alwatanyh.com" },
  { name: "평택 브레인시티 푸르지오", url: "https://eliasart.kr/" },
  { name: "군산 경장동 중해마루힐", url: "https://www.cssdesign.kr/" },
  { name: "창원 자이위브", url: "https://www.cssdesign.kr/" },
  { name: "가경더센트럴리티", url: "https://www.marvelpartners.co.kr" },
  { name: "대전 쌍용 더플래티넘", url: "https://intercs.co.kr/" },
  { name: "용인 푸르지오 원클러스터2단지", url: "https://www.beyinegzersizi.com" },
  { name: "구미 로제비앙 메가시티", url: "https://www.leecols.kr" },
  { name: "원종 휴먼빌 클라츠", url: "https://www.abcya4.com/" },
  { name: "신검단 로얄파크시티2", url: "https://www.sketchs.co.kr/" },
  { name: "천안 쌍용 센트럴타워", url: "https://www.daincounseling.co.kr" },
  { name: "브레인시티 앤네이처 미래도", url: "https://niceoi.kr/" },
  { name: "평택화양 신영지웰", url: "https://delidilly.co.kr/" },
  { name: "평택화양 동문디이스트", url: "https://www.verficktescheisse.com" },
];

const Footer = () => {
  // 모바일 여부 체크
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // FAMILY SITE 열림/닫힘 상태 (사용자 인터랙션용)
  const [isFamilyOpen, setFamilyOpen] = useState(false);

  // (선택) 방문예약 팝업 사용 시 상태 관리
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [registration, setRegistration] = useState({ name: "", phone: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  // FAMILY SITE 목록 JSX (재사용)
  const familySiteList = (
    <ul id="family-site-list" className={styles.familyList}>
      {partnerSites.map((site, idx) => (
        <li key={idx}>
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            {site.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={styles.footerContainer}>
      {isMobile ? (
        <div className={styles.mobileWrapper}>
          {/* 상단 로고 */}
          <div className={styles.mobileLogo}>
            <h2>평택 브레인시티 수자인</h2>
          </div>

          {/* 안내문구 */}
          <div className={styles.mobileInfoText}>
            <p>
              본 웹사이트에서 사용된 사진 및 이미지는 소비자의 이해를 돕기 위한
              것으로 <br />실제와 다를 수 있습니다.
            </p>
            <p>
              단지 주변 개발계획은 인허가 및 정부 정책에 따라 변경 또는 연기,
              취소될 수 있습니다.
            </p>
          </div>

          {/* 전화번호 */}
          <div className={styles.mobilePhone}>
            <IoCall size={20} />
            <span>1533-8848</span>
          </div>

          {/* 시행사/시공사 */}
          <div className={styles.mobileCompany}>
            <div>
              <strong>시&nbsp;행&nbsp;사</strong> (주)BS한양
            </div>
            <div>
              <strong>시&nbsp;공&nbsp;사</strong> (주)BS한양
            </div>
          </div>

          {/* 방문예약 & FAMILY SITE 버튼 */}
          <div className={styles.mobileButtons}>
            <button
              type="button"
              className={styles.reserveBtn}
              onClick={() => setPopupOpen(true)}
            >
              방문예약 바로가기
            </button>

            <div className={styles.familySite}>
              <button
                type="button"
                className={styles.familyBtn}
                onClick={() => setFamilyOpen(!isFamilyOpen)}
                aria-expanded={isFamilyOpen}
                aria-controls="family-site-list"
              >
                FAMILY SITE {isFamilyOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {/* JS 실행 시 토글에 따른 링크 목록 */}
              {isFamilyOpen && familySiteList}
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className={styles.mobileCopyright}>
            <p>
              COPYRIGHTⓒ 2025 평택 브레인시티 수자인 INC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.desktopWrapper}>
            <div className={styles.leftSide}>
              <h2>평택 브레인시티 수자인</h2>
              <p>
                본 웹사이트에서 사용된 사진 및 이미지는 소비자의 이해를 돕기 위한
                것으로 실제와 다를 수 있습니다.
                <br />
                단지 주변 개발계획은 인허가 및 정부 정책에 따라 변경 또는 연기,
                취소될 수 있습니다.
              </p>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.phoneNumber}>
                <IoCall size={24} />
                <span>1533-8848</span>
              </div>
              <div className={styles.companyInfo}>
                <div>
                  <strong>시&nbsp;공&nbsp;사</strong> (주)BS한양
                </div>
              </div>
              <div className={styles.buttonRow}>
                <button
                  type="button"
                  className={styles.reserveBtn}
                  onClick={() => setPopupOpen(true)}
                >
                  방문예약 바로가기
                </button>
                <div className={styles.familySite}>
                  <button
                    type="button"
                    className={styles.familyBtn}
                    onClick={() => setFamilyOpen(!isFamilyOpen)}
                    aria-expanded={isFamilyOpen}
                    aria-controls="family-site-list"
                  >
                    FAMILY SITE {isFamilyOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {isFamilyOpen && familySiteList}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desktopCopyright}>
            <p>
              COPYRIGHTⓒ 2025 평택 브레인시티 수자인 INC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </>
      )}

      {/* <noscript> 블록: 자바스크립트 미실행 환경에서도 파트너 링크 노출 */}
      <noscript>
        <div className={styles.familySiteNoscript}>
          <h3>FAMILY SITE</h3>
          {familySiteList}
        </div>
      </noscript>

      {/* (선택) 팝업 사용 시 */}
      {isPopupOpen && (
        <InterestPopup
          onClose={() => setPopupOpen(false)}
          registration={registration}
          handleInputChange={handleInputChange}
        />
      )}
    </footer>
  );
};

export default Footer;

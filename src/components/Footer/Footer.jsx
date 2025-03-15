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
  { name: "힐스테이트 용인마크밸리", url: "https://www.alwatanyh.com" },
  { name: "엘리프 세종 5-1", url: "https://www.sekailog.com" },
  { name: "용인 푸르지오 원클러스터 2단지", url: "https://www.beyinegzersizi.com" },
  { name: "도안 벽산블루밍", url: "https://www.abcya4.com/" },
  { name: "이편한세상 성성호수공원", url: "https://www.3sha-re.com/" },
  { name: "힐스테이트 용인마크밸리", url: "https://www.alwatanyh.com" },
  { name: "평택 브레인시티 푸르지오", url: "https://www.bunyang-114.com" },
  { name: "브레인시티 푸르지오", url: "https://www.a7lashare.com" },
];

const Footer = () => {
  // 모바일 여부 체크
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // FAMILY SITE 열림/닫힘
  const [isFamilyOpen, setFamilyOpen] = useState(false);

  // (선택) 방문예약 팝업 사용 시
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [registration, setRegistration] = useState({ name: "", phone: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer className={styles.footerContainer}>
      {/* 
        ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
        모바일 레이아웃 (첫 번째 스크린샷처럼)
      */}
      {isMobile ? (
        <div className={styles.mobileWrapper}>
          {/* 상단 로고(텍스트/이미지) */}
          <div className={styles.mobileLogo}>
            {/* 원하는 로고/텍스트로 변경하세요 */}
            <h2>SUJAIN</h2>
            <p>브레인시티 수자인</p>
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
              <strong>시&nbsp;행&nbsp;사</strong> (주)한양건설
            </div>
            <div>
              <strong>시&nbsp;공&nbsp;사</strong> (주)한양건설
            </div>
          </div>

          {/* 방문예약 & FAMILY SITE 버튼 */}
          <div className={styles.mobileButtons}>
            {/* 방문예약 (팝업) */}
            <button
              type="button"
              className={styles.reserveBtn}
              onClick={() => setPopupOpen(true)}
            >
              방문예약 바로가기
            </button>

            {/* FAMILY SITE 드롭다운 */}
            <div className={styles.familySite}>
              <button
                type="button"
                className={styles.familyBtn}
                onClick={() => setFamilyOpen(!isFamilyOpen)}
              >
                FAMILY SITE {isFamilyOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isFamilyOpen && (
                <ul className={styles.familyList}>
                  {partnerSites.map((site, idx) => (
                    <li key={idx}>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className={styles.mobileCopyright}>
            <p>COPYRIGHTⓒ 2024 평택 브레인시티 수자인 INC. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      ) : (
        <>
          {/* 
            ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
            데스크톱 레이아웃 (간단 예시)
            - 실제 사이트에 맞춰 자유롭게 수정하세요
          */}
          <div className={styles.desktopWrapper}>
            <div className={styles.leftSide}>
              <h2>SUJAIN 평택 브레인시티 수자인</h2>
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
                  <strong>시&nbsp;행&nbsp;사</strong> (주)한양건설
                </div>
                <div>
                  <strong>시&nbsp;공&nbsp;사</strong> (주)한양건설
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
                  >
                    FAMILY SITE {isFamilyOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {isFamilyOpen && (
                    <ul className={styles.familyList}>
                      {partnerSites.map((site, idx) => (
                        <li key={idx}>
                          <a
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {site.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desktopCopyright}>
            <p>
              COPYRIGHTⓒ 2024 평택 브레인시티 푸르지오 INC. ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </>
      )}

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

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './FloorPlan.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

const FloorPlan3 = () => {
  const [activeTab, setActiveTab] = useState(1); // 기본적으로 첫 번째 탭 활성화

  // 동영상 파일 경로들
  const videoFiles = [
    { id: 1, title: "입지환경안내영상", src: "/videos/입지환경안내영상.mp4" },
    { id: 2, title: "59타입 안내영상", src: "/videos/59타입안내영상.mp4" },
    { id: 3, title: "84타입 안내영상", src: "/videos/84타입안내영상.mp4" }
  ];

  const handleTabClick = (id) => {
    setActiveTab(id); // 탭 클릭 시 활성화된 탭 변경
  };

  const menuContents = [
    { title: "59㎡", url: "/FloorPlan/59A" },
    { title: "84㎡", url: "/FloorPlan/59B" },
    { title: "세대안내영상", url: "/FloorPlan/videos" }  // 세대안내영상 링크
  ];

  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Header />
      <FixIcon />

      <Bener title="세대안내" />

      <MenuBar contents={menuContents} />

      {/* 두 번째 메뉴바 (탭 메뉴) */}
      <div className={styles.tabMenu}>
        {videoFiles.map((video) => (
          <button
            key={video.id}
            className={activeTab === video.id ? styles.activeTab : ""}
            onClick={() => handleTabClick(video.id)}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* 동영상 표시 */}
      <div className={styles.videoContainer}>
        <video
          controls
          className={styles.videoPlayer}
          src={videoFiles.find(video => video.id === activeTab)?.src}
          alt="세대안내영상"
        />
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan3;

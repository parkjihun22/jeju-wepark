import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SlideMenu.module.scss";

const SlideMenu = ({ contents }) => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleMenuClick = (index) => {
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.container}>
            <div className={styles.menuBtn}>
                <a href="https://naver.me/xs350ipu" className={styles.linkItem}>
                    모바일 방문예약
                </a>
            </div>
            {contents.map((value, idx) => (
                <div key={idx} className={styles.menuBtn}>
                    <div onClick={() => handleMenuClick(idx)}>
                        {value.title}
                    </div>
                    <div className={`${styles.subMenu} ${clickedIndex === idx ? styles.show : ''}`}>
                        {clickedIndex === idx && value.subMenu && value.subMenu.map((subValue, subIdx) => (
                            <Link key={subIdx} to={subValue.subUrl} className={styles.subMenuBtn}>
                                {subValue.subTitle}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SlideMenu;

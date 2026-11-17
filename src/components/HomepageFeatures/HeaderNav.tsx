import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function HeaderNav(): ReactNode {
  const [activeId, setActiveId] = useState<string>("");
  interface NavItem {
    id: string;
    num: string;
    text: string;
  }

  const navItems: NavItem[] = [
    { id: "about", num: "01", text: "About" },
    { id: "affiliations", num: "02", text: "Affiliations" },
    { id: "awards", num: "03", text: "Awards" },
    { id: "projects", num: "04", text: "Projects" },
    { id: "reviews", num: "05", text: "Reviews" },
    { id: "contact", num: "06", text: "Contact" },
  ];

  // 스크롤 위치에 따라 현재 보이는 섹션 감지 (IntersectionObserver 사용)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // 감지 오프셋 조절

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav className={styles.stickyNav} aria-label="Sections">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`${styles.navItem} ${activeId === item.id ? styles.activeNav : ""}`}
        >
          <span>{item.num}</span>
          <span>{item.text}</span>
        </a>
      ))}
    </nav>
  );
}

import { ReactNode } from "react";
import styles from "./About.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import commonStyles from "./Common.module.css";

interface skillGroup {
  category: string;
  items: string[];
}

export default function About(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const { aboutMe } = siteConfig.customFields as any;
  const skills = aboutMe.skills as skillGroup[];

  return (
    <section className={commonStyles.container}>
      <div>
        <Heading as="h2" id="about">
          About
        </Heading>
        <hr className={commonStyles.sectionLine} />
      </div>
      <p>나에 대한 글, 자기 소개</p>
      <Heading as="h3" style={{ marginTop: "2rem" }}>
        Skills
      </Heading>
      <hr className={commonStyles.sectionLine} />
      <div className={styles.skillsGrid}>
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className={styles.skillGroup}>
            <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
            <div className={styles.skillTags}>
              {skillGroup.items.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

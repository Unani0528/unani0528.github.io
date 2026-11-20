import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import commonStyles from "./Common.module.css";
import styles from "./Awards.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AwdCards, { Award } from "@site/src/components/Cards/awdCard";

export default function Awards(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const { aboutMe } = siteConfig.customFields as any;
  const sortedAwards = [...aboutMe.awards].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className={commonStyles.container}>
      <div>
        <Heading as="h2" id="awards">
          Awards
        </Heading>
        <hr className={commonStyles.sectionLine} />
      </div>

      <AwdCards awards={sortedAwards} />
    </section>
  );
}

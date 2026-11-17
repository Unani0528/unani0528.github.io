import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import HeaderNav from "@site/src/components/HomepageFeatures/HeaderNav";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { aboutMe } = siteConfig.customFields as any;

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--ifm-font-color-base)",
                letterSpacing: "0.1rem",
                fontWeight: "700",
              }}
            >
              Security Researcher & Software Engineer
            </p>
            <Heading as="h1" className={styles.heroName}>
              <span>{aboutMe.name.split(" ")[0]}</span>
              <br />
              <span>{aboutMe.name.split(" ")[1]}</span>
            </Heading>
          </div>
          <p className={styles.heroBio}>{aboutMe.bio}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Security Researcher & Software Engineer`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <HeaderNav />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

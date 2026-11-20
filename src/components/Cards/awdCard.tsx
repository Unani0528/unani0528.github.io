import React from "react";
import Link from "@docusaurus/Link";
import styles from "./awdCard.module.css";

export interface Award {
  id: string;
  title: string;
  competition: string;
  host: string;
  date: string;
  description: string;
  projectUrl?: string;
  sourceUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

interface AwardProps {
  awards: Award[];
}

// 개별 수상 카드
function AwardItem({ award }: { award: Award }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.awardLabel}>AWARD</span>
        <span className={styles.date}>{award.date}</span>
      </div>

      <h3 className={styles.title}>{award.title}</h3>
      <h4 className={styles.competition}>{award.competition}</h4>

      <div className={styles.info}>
        <span>주최 및 개최: {award.host}</span>
      </div>

      <p className={styles.description}>{award.description}</p>

      {award.tags && award.tags.length > 0 && (
        <div className={styles.tags}>
          {award.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {(award.projectUrl || award.sourceUrl || award.liveUrl) && (
        <>
          <div className={styles.cardDivider} />

          <div className={styles.actions}>
            {award.projectUrl && (
              <Link className={styles.projectButton} to={award.projectUrl}>
                Project ↗
              </Link>
            )}

            {award.sourceUrl && (
              <a
                className={styles.secondaryButton}
                href={award.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source ↗
              </a>
            )}

            {award.liveUrl && (
              <a
                className={styles.secondaryButton}
                href={award.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ↗
              </a>
            )}
          </div>
        </>
      )}
    </article>
  );
}

// 전체 수상 내역
export default function AwCard({ awards }: AwardProps) {
  // 최신 날짜순 정렬
  const sortedAwards = [...awards].sort((a, b) => b.date.localeCompare(a.date));

  // 연도별 그룹화
  const groupedAwards = sortedAwards.reduce(
    (groups, award) => {
      const year = award.date.slice(0, 4);

      if (!groups[year]) {
        groups[year] = [];
      }

      groups[year].push(award);

      return groups;
    },
    {} as Record<string, Award[]>,
  );

  return (
    <div className={styles.awardsContainer}>
      {Object.entries(groupedAwards)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, yearAwards]) => (
          <section key={year} className={styles.yearSection}>
            <div className={styles.yearHeader}>
              <h3 className={styles.yearTitle}>{year}</h3>
              <span className={styles.awardCount}>{yearAwards.length} Awards</span>
            </div>

            <div className={styles.divider} />

            <div className={styles.grid}>
              {yearAwards.map((award) => (
                <AwardItem key={award.id} award={award} />
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}

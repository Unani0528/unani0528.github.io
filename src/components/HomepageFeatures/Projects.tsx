import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import commonStyles from "./Common.module.css";
import styles from "./Projects.module.css";

export default function Projects(): ReactNode {
  return (
    <section className={commonStyles.container}>
      <div>
        <Heading as="h2" id="projects">
          Projects
        </Heading>
        <hr className={commonStyles.sectionLine} />
      </div>
    </section>
  );
}

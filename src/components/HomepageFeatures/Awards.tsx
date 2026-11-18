import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import commonStyles from "./Common.module.css";
import styles from "./Awards.module.css";

export default function Awards(): ReactNode {
  return (
    <section className={commonStyles.container}>
      <div>
        <Heading as="h2" id="awards">
          Awards
        </Heading>
        <hr className={commonStyles.sectionLine} />
      </div>
    </section>
  );
}

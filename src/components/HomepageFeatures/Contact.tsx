import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import commonStyles from "./Common.module.css";
import styles from "./Contact.module.css";

export default function Contact(): ReactNode {
  return (
    <section className={commonStyles.container}>
      <div>
        <Heading as="h2" id="contact">
          Contact
        </Heading>
        <hr className={commonStyles.sectionLine} />
      </div>
    </section>
  );
}

import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import commonSytles from "./Common.module.css";

export default function Collaborations(): ReactNode {
  return (
    <section className={commonSytles.container}>
      <Heading as="h2" id="collaborations">
        Collabolations
      </Heading>
      <hr className={commonSytles.sectionLine} />
    </section>
  );
}

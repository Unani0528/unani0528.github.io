import type { ReactNode } from "react";
import About from "@site/src/components/HomepageFeatures/About";
import Collaborations from "./Collaborations";
import Awards from "@site/src/components/HomepageFeatures/Awards";
import Projects from "@site/src/components/HomepageFeatures/Projects";
import Contact from "@site/src/components/HomepageFeatures/Contact";

export default function HomepageFeatures(): ReactNode {
  return (
    <div>
      <About />
      <Collaborations />
      <Awards />
      <Projects />
      <Contact />
    </div>
  );
}

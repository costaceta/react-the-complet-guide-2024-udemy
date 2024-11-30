import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConceptItem) => (
          <CoreConcept key={coreConceptItem.title} {...coreConceptItem} />
        ))}
      </ul>
    </Section>
    // <section id="core-concepts">
    //   <h2>Core Concepts</h2>
    // </section>
  );
};

export default CoreConcepts;

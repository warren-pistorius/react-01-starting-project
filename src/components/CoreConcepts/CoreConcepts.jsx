import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      {/* Using the spread operator here to simplify passing in each property. 
                    See: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649038#overview */}
      <ul>
        {/* Before using map function this would be: */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        {/* When using map of CORE_CONCEPTS the code would be: */}
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.id} {...concept} />
        ))}
      </ul>
    </Section>
  );
}

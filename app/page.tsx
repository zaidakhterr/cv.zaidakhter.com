import * as React from "react";
import { Links, Page, PageSubTitle, PageTitle, PrintCV, Section, SectionTitle } from "./components";
import { data } from "./data";

export default function CV() {
  return (
    <>
      <main id="cv" className="p-6 print:p-0">
        <Page>
          <PageTitle text={data.name} />
          <PageSubTitle text={data.position} />
          <Links links={data.links} />

          <SectionTitle text="Summary" />
          <p>{data.summary}</p>

          <SectionTitle text="Experience" />
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <Section line1={exp.company} line1End={exp.location} line2={exp.position} line2End={exp.period} />
              <ul className="list-disc ml-4">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Page>
        <Page>
          <SectionTitle text="Education" />
          {data.education.map((edu, idx) => (
            <Section
              key={idx}
              line1={edu.institution}
              line1End={edu.location}
              line2={edu.degree}
              line2End={edu.period}
            />
          ))}

          <SectionTitle text="Certifications" />

          <SectionTitle text="Skils" />
        </Page>
      </main>
      <PrintCV />
    </>
  );
}

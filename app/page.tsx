import * as React from "react";
import { Links, Page, PageSubTitle, PageTitle, PrintCV, Section, SectionList, SectionTitle } from "./components";
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
              <SectionList items={exp.details} />
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
          {data.certifications.map((cert, idx) => (
            <Section
              key={idx}
              line1={cert.name}
              line1End={cert.issued}
              line2={`${cert.provider}${cert.certificationId ? ` (Certification ID: ${cert.certificationId})` : ""}`}
            />
          ))}

          <SectionTitle text="Leadership & Activities" />
          {data.activities.map((act, idx) => (
            <div key={idx} className="mb-4">
              <Section line1={act.club} line1End={act.location} line2={act.position} line2End={act.period} />
              <SectionList items={act.details} />
            </div>
          ))}

          <SectionTitle text="Skils" />
          {data.skills.map((skill, idx) => (
            <div key={idx} className="mb-0">
              <Section line1={skill.title} compact />
              <SectionList items={skill.details} />
            </div>
          ))}
        </Page>
      </main>
      <PrintCV />
    </>
  );
}

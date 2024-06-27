import * as React from "react";
import { Header, Page, PrintCV, Section, SectionContainer, SectionList, SectionTitle } from "./components";
import { data } from "./data";

export default function CV() {
  return (
    <>
      <main id="cv" className="p-6 print:p-0">
        <Page>
          <Header title={data.name} subtitle={data.position} links={data.links} />

          <SectionContainer>
            <SectionTitle text="Summary" />
            <p>{data.summary}</p>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle text="Experience" />
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-2">
                <Section
                  line1={exp.company}
                  line1End={exp.period}
                  line2={exp.position}
                  line2End={exp.location}
                  link={exp.link}
                />
                <SectionList items={exp.details} />
              </div>
            ))}
          </SectionContainer>
          <SectionContainer>
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
          </SectionContainer>
          <SectionContainer>
            <SectionTitle text="Skills" />
            {data.skills.map((skill, idx) => (
              <div key={idx} className="mb-0">
                <SectionList items={skill.details} />
              </div>
            ))}
          </SectionContainer>
        </Page>
        {/* <Page>

          <SectionContainer>
            <SectionTitle text="Certifications" />
            {data.certifications.map((cert, idx) => (
              <Section key={idx} line1={cert.name} line1End={cert.issued} line2={`${cert.provider}`} link={cert.link} />
            ))}
          </SectionContainer>
        </Page> */}
      </main>
      <PrintCV />
    </>
  );
}

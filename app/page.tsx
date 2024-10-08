import * as React from "react";
import { Header, Page, PrintCV, Section, SectionContainer, SectionList, SectionTitle } from "./components";
import { data } from "./data";

export default function CV() {
  return (
    <>
      <main id="cv" className="p-6 print:p-0">
        <Page>
          <Header image={data.image} title={data.name} subtitle={data.position} links={data.links} />

          <SectionContainer>
            <SectionTitle text="Summary" />
            <p>{data.summary}</p>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle text="Education" />
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <Section line1={edu.institution} line1End={edu.location} line2={edu.degree} line2End={edu.period} />
                <SectionList items={edu.details} />
              </div>
            ))}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle text="Experience" />
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
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
            <SectionTitle text="Projects" />
            {data.projects.slice(0, 1).map((proj, idx) => (
              <div key={idx} className="mb-4">
                <Section line1={proj.company} line1End={proj.period} link={proj.link} />
                <SectionList items={proj.details} />
              </div>
            ))}
          </SectionContainer>
        </Page>
        <Page>
          <SectionContainer>
            {data.projects.slice(1).map((proj, idx) => (
              <div key={idx} className="mb-4">
                <Section line1={proj.company} line1End={proj.period} link={proj.link} />
                <SectionList items={proj.details} />
              </div>
            ))}
          </SectionContainer>

          {/* <SectionContainer>
            <SectionTitle text="Certifications" />
            {data.certifications.map((cert, idx) => (
              <Section
                key={idx}
                line1={cert.name}
                line1End={cert.issued}
                line2={`${cert.provider}${cert.certificationId ? ` (Certification ID: ${cert.certificationId})` : ""}`}
              />
            ))}
          </SectionContainer> */}

          {/* <SectionContainer>
            <SectionTitle text="Leadership & Activities" />
            {data.activities.map((act, idx) => (
              <div key={idx} className="mb-4">
                <Section line1={act.club} line1End={act.location} line2={act.position} line2End={act.period} />
                <SectionList items={act.details} />
              </div>
            ))}
          </SectionContainer> */}

          <SectionContainer>
            <SectionTitle text="Skills" />
            {data.skills.map((skill, idx) => (
              <div key={idx} className="mb-0">
                <Section line1={skill.title} compact />
                <SectionList items={skill.details} />
              </div>
            ))}
          </SectionContainer>
        </Page>
      </main>
      <PrintCV />
    </>
  );
}

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import "../css/experience.css";
import glass from "../assets/images/glass-96.png";
import js from "../assets/images/js-96.png"

const resumeExperience = [
  {
    years: "Jul-Sep 2023",
    title: "Software Developer Trainee",
    company: "OpenSense Labs",
    mainTech: ["Javascript"],
    technologies: ["HTML", "SCSS","Javascript","Drupal","Php","MySQL"],
  },
  {
    years: "Aug-Nov 2021",
    title: "Web Developer Intern",
    company: "Shunya.ek",
    mainTech: ["Javascript"],
    technologies: ["HTML", "CSS","JSON"],
  },
  {
    years: "Jul-Aug 2021",
    title: "Web Developer Intern",
    company: "LetsGrowMore",
    mainTech: ["REACT"],
    technologies: ["HTML", "CSS","REACT"],
  }

];

export const Experience = () => {
  const work = resumeExperience.map((work, i) => {
    const { mainTech, technologies, years, title, company } = work;
    const mainTechBadges = mainTech.map((technology, index) => (
      <Badge pill className="main-badge mr-2 mb-2" key={index}>
        {technology}
      </Badge>
    ));
    const techBadges = technologies.map((technology, index) => (
      <Badge pill className="experience-badge mr-2 mb-2" key={index}>
        {technology}
      </Badge>
    ));
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={years}
        iconStyle={{
          background: "#5072A7",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<img src={js} className="experience-icon" alt="icon" />}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          {mainTechBadges}
        </div>
        <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
          {title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
          {company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{techBadges}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="experience pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">

            <h2 className="neonText">
              WORK EXPERIENCE
            </h2>

        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline className="exp-card">
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#5072A7",
              color: "#fff",
              textAlign: "center"
            }}
            icon={<img src={glass} className="experience-icon" alt="icon"/>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};


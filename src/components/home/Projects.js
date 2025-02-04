import React, { Component } from "react";
import Project from "./Project";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import projects from "./projects-data";
import { setColor, media, setRem } from "../../styles";

export default class Projects extends Component {
  state = {
    projects: projects
  };
  render() {
    return (
      <Section color={setColor.lightGray}>
        <Title title="My Projects" center />
        <ProjectsCenter>
          {this.state.projects.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </ProjectsCenter>
      </Section>
    );
  }
}

const ProjectsCenter = styled.div`
  width: 90vw;
  margin: auto;
  ${media.large`
  width: 100vw;
  max-width: 1170px;
 
  `};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-column-gap: ${setRem(45)};
`;

import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MusicImage } from "../images/image";

const ProjectCard = styled.a`
  display: block;
  margin: 10px 10px 0px 0px;
  width: 300px;
  text-decoration: none;
  height: 430px;
  padding: 10px 10px 10px 10px;
  border-radius: 26px;
  align-items: start;
  background-color: hsl(233, 8%, 19%);
  justify-content: center;
  text-align: center;
  border-width: 0;
  text-decoration: none important!;
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
    0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
    0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09);
`;

const ProjectTitle = styled.div`
padding-top: 10px;
  font-style: bold;
  font-size: 30px;
`;

const ProjectDescription = styled.div`
padding-top: 5px;
  font-size: 18px;
`;

export default function ProjectPage() {
  return (
    <Layout currentPage="Projects" >
      <SEO
        title="Projects"
        description={"A selection of personal projects I have worked on."}
        keywords={["projects", "musical chords", "portfolio"]}
      />

      <div>
        <h2>Projects</h2>
        <p>
          <div className="d-flex flex-wrap flex-row">
            <ProjectCard
              target="_blank"
              key={"Musical chords"}
              href={"https://music.maria.engineer"}
            >
              <MusicImage/>
              <ProjectTitle>Musical Chord Helper</ProjectTitle>
              <ProjectDescription>
                A small project I did when I was learning music theory and how
                to play trumpet. I used it in order to learn more about scales
                and to enable me to more easily improvise on jazz standards.
              </ProjectDescription>
            </ProjectCard>
          </div>
        </p>
      </div>
    </Layout>
  );
}

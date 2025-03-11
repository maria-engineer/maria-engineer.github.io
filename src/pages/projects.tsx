import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MusicImage } from "../images/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGift } from "@fortawesome/fontawesome-free-solid";
import { ButtonList } from "../components/commonStyles";

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
  line-height: 1;
`;

export default function ProjectPage() {
  return (
    <Layout currentPage="Interests" currentSubPage="Projects">
      <SEO
        title="Projects"
        description={"A selection of personal projects I have worked on."}
        keywords={["projects", "musical chords", "portfolio"]}
      />

      <h2>Software Projects</h2>
      <p>
        <div className="d-flex flex-wrap flex-row">
          <ProjectCard
            target="_blank"
            key={"Musical chords"}
            href={"https://music.maria.engineer"}
          >
            <MusicImage />
            <ProjectTitle>Jazz Chord Helper</ProjectTitle>
            <ProjectDescription>
              A small project I did when I was learning music theory and how to
              play trumpet. I used it in order to learn more about scales and to
              enable me to more easily improvise on jazz standards.
            </ProjectDescription>
          </ProjectCard>
        </div>
      </p>

      <h2>Art Projects</h2>
      <h3>Collaboration</h3>
      <p>
        Collaboration with{" "}
        <a href="https://www.facebook.com/WalrusFacts/" target="_blank">
          Walrus Facts
        </a>{" "}
        to create designs for merchandise they could use to gather donations for
        the WWF. You can find them{" "}
        <a href="https://www.redbubble.com/people/walrusfacts/shop">here</a>.
      </p>
      <p className="d-flex ">
        <iframe
          src="https://www.instagram.com/p/CBl1hqeFjxT/embed"
          width="400"
          height="450"
          style={{ borderRadius: "20px 20px", marginRight: "20px" }}
          frameBorder="0"
          scrolling="no"
          marginWidth={20}
          allowTransparency={true}
        ></iframe>
        <iframe
          src="https://www.instagram.com/p/CBRHkcYFG6A/embed"
          width="400"
          height="450"
          style={{ borderRadius: "20px 20px" }}
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
        ></iframe>
      </p>
      <h2> Accounts:</h2>
      <ButtonList>
        <a
          data-toggle="tooltip"
          title="Instagram Account"
          href="https://www.instagram.com/bunnylol.me/?hl=en"
          target="_blank"
          className="small-button cornblue go-moonbeam"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          data-toggle="tooltip"
          title="RedBubble Account - All profits from sales go to Refuge UK"
          href="https://www.redbubble.com/people/Bunnylol/shop?asc=u"
          target="_blank"
          className="small-button cornblue go-moonbeam"
        >
          <FontAwesomeIcon icon={faGift} />
        </a>
      </ButtonList>
    </Layout>
  );
}

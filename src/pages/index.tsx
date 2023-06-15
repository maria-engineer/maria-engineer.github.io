import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "../images/image";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage(): JSX.Element {
  return (
    <>
      <SEO title="Home" />
      <Layout currentPage="Home" currentSubPage="Home">
        <ProfileImage />
        <h2>About Me</h2>
        <p>
          I am a Software Engineer with a focus on Developer and Operational
          Experience. I have discovered a passion for finding solutions that
          will lead to better developer experience and increased efficiency,
          both on a day to day basis, as well as part of operations. I've
          greatly enjoyed exploring different solutions as I believe there isn't
          one solution for everything, sometimes it's tools, sometimes it's
          automation, sometimes is system design. Solving such problems is both
          exciting and rewarding.
        </p>
        <p>
          In my free time I enjoy a varied number of hobbies like: drawing,
          cooking, crochet, reading, writing, playing TTRPG games, and watching
          theatre.
        </p>
        <h2>Past Engagements</h2>
        <p>
          Reddit,
          <a href="https://cord.com" target="_blank">
            Cord
          </a>
          , Thoughtworks, Facebook, Amazon, Google
        </p>

        <h2>Contact</h2>
        <p className="row">
          <a
            href="https://www.linkedin.com/in/maria-mateescu-1085b980"
            target="_blank"
            className="cornblue go-moonbeam small-button"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              data-toggle="tooltip"
              title="Link to LinkedIn."
            />
          </a>
          <a
            className="cornblue go-moonbeam small-button"
            href="mailto:hi@maria.engineer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              data-toggle="tooltip"
              title="Email me."
            />
          </a>
        </p>
      </Layout>
    </>
  );
}

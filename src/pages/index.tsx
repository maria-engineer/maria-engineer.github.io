import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { LinkButton } from "../components/commonStyles";
import { BarefootImage, ICFImage } from "../images/image";
import styled from "@emotion/styled";

const Credentials = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  text-align: center;
  content-align: center;
  line-height: normal;
  align-self: center;
`;

export default function IndexPage(): JSX.Element {
  return (
    <>
      <SEO title="Home" />
      <Layout currentPage="Home" currentSubPage="Home">
        <h2>About Me</h2>
        <p>
          I am a trained coach, specializing in personal and executive coaching.
          My goal is to create a safe, empowering space where clients feel
          supported and confident in navigating life's complexities. I believe
          that, just like in coding, the key to meaningful progress isn't fixing
          what's broken but continuously refining, optimizing, and evolving. I
          work with my clients to enable that growth.
        </p>

        <p>
          I hold a degree in Computer Science from Oxford University and have
          worked across diverse engineering roles, from startups to industry
          giants. My technical background has given me a unique perspective on
          problem-solving, systems thinking, and efficiency - all of which I now
          bring to my coaching practice.
        </p>
        <p>
          <LinkButton
            role="link"
            href="https://www.the-andria.com/teachers/view/maria_engineer"
            target="_blank"
            aria-label="Go to an external site where you can book my coaching sessions"
            tabindex="0"
          >
            Work with me
          </LinkButton>
        </p>
        <Credentials>
          <a href="https://barefootcoaching.co.uk" target="_blank">
            <BarefootImage />
          </a>
          <a
            href="https://www.credly.com/badges/eb2603e4-cadb-498c-87e5-a7770d14cdd4/public_url"
            target="_blank"
          >
            <ICFImage />
          </a>
        </Credentials>
        <p>
          As a Software Engineer I focus on Developer and Operational
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
          cooking, weightlifting, crochet, reading, writing, TTRPG games, and
          theatre.
        </p>
        <h2>Past Engagements</h2>
        <p>
          Reddit,{" "}
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

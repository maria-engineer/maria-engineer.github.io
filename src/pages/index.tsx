import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Credentials, LinkButton } from "../components/commonStyles";
import { BarefootImage, ICFImage } from "../images/image";



export default function IndexPage(): JSX.Element {
  return (
    <>
      <SEO title="Home" />
      <Layout currentPage="Home" currentSubPage="Home">
        <h2>About Me</h2>
        <p>
          I'm a coach who believes growth happens when we challenge our
          assumptions, lean into discomfort, and use our experiences—good or
          bad—as fuel for change. My coaching is rooted in my own journey of
          navigating big transitions and challenges, from career shifts to
          moving between countries. I've learned firsthand that the path to
          meaningful change isn't about following a preset formula—it's about
          uncovering what's truly important to you, and then aligning your
          actions with those values.{" "}
        </p>
        <p>
          My approach isn't about giving you any answers. It's about helping you
          find your own, whether you're facing a tough decision, feeling
          overwhelmed by life's demands, or simply trying to figure out what's
          next. I guide you through the process of clarity, uncovering the
          underlying motivations and beliefs that shape your choices, so you can
          make confident, informed decisions that reflect who you are and what
          you want.
        </p>

        <p>
          I was steered toward Computer Science from an early age. My path felt
          almost predetermined—study at Oxford, work in tech... but something
          was missing. While I excelled in technical roles at companies like
          Facebook, Amazon, I realized that the real challenges I faced were
          human-centered—teams, decision-making, personal growth. That was a
          hard realisation for me because I always thought it was all about the
          maths. But I soon learned to love it. After experiencing several
          career shifts and life transitions, including living in New York,
          Cambridge, London, and now Seoul, I found coaching as a way to combine
          my problem-solving mindset with my desire to help others navigate
          change. Now, I guide professionals and leaders through the uncertainty
          of growth, helping them align their decisions with their true values
          and step into their next chapter with clarity and confidence.
        </p>
        <p>
          <LinkButton
            role="link"
            href="https://cal.com/maria-engineer/introduction-to-coaching"
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
          When I'm not coaching, you'll find me exploring food, weightlifting,
          hiking, reading, writing, and diving into tabletop role-playing
          games or theater.
        </p>
        <h2>Past Engagements</h2>
        <p>
          I've had the privilege of working with some incredible organizations,
          including:
        </p>
        <p>Reddit, Cord(now defunct), Thoughtworks, Facebook, Amazon, Google</p>
        <p>
          Each of these experiences shaped who I am today, both as a
          professional and as a coach, and has fueled my drive to help others
          thrive in their careers and lives.
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

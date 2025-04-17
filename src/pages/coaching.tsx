import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Credentials, LinkButton } from "../components/commonStyles";
import { BarefootImage, ICFImage } from "../images/image";

const Carousel = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const Chevron = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: none;
  border: none;
  font-size: 2.5rem;
`;

const ClientName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin: "0.5rem 0";
`;

const ClientTitle = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
`;

const StoryDiv = styled.div`
  wrap: pretty;
  font-size: 1rem;
  margin: "1rem 0";
`;

const StoryContainer = styled.div`
  text-align: center;
  width: 80%;
`;

const clientStories: Array<{ story: string; client: string; title: string }> = [
  {
    story:
      "S came to me at a critical turning point in his startup journey. The company " +
      "had struggled to find Product-Market Fit (PMF) within the expected timeline, " +
      "and with his co-founder and CEO leaving, he was left to decide the next steps. " +
      "Through our coaching sessions, we uncovered what truly mattered to him. It became" +
      " clear that continuing with the startup no longer aligned with his personal " +
      "motivations. He made the brave decision to transition, and went on to focus on" +
      " product development at a different startup. This new role not only matched his" +
      " skill set but also brought him the fulfillment of doing what he loved.",
    client: "S",
    title: "ex-CTO and Founder",
  },
  {
    story: "Lorem ipsum",
    client: "C",
    title: "CSO",
  },
];

const stories = 1;

export default function CoachingPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % stories);
      }, 120000);
    }
  }, [autoScroll]);

  const next = () => {
    setAutoScroll(false);
    setCurrentIndex((currentIndex + 1) % stories);
  };

  const prev = () => {
    setAutoScroll(false);
    setCurrentIndex(currentIndex == 0 ? stories - 1 : currentIndex - 1);
  };

  return (
    <>
      <SEO title="Coaching" />
      <Layout currentPage="Coaching">
        <h2>Why coaching?</h2>
        <StoryDiv>
          Have you ever felt stuck or overwhelmed? Coaching is an opportunity to
          dive deep into what truly drives you, uncover the core challenges
          you're facing, and identify the path forward. Together, we can
          discover the key areas that matter most to you. And then enable action
          to get to those important goals.
        </StoryDiv>
        <h2>My areas of expertise</h2>
        <StoryDiv>
          I believe the only constant in life is change. I have experienced my
          fair share of change, and along the way I have become more resilient
          to it. I learned how to use even the undesired change to lead me to
          the places that I wanted to. Sometimes quite literally. I can help you
          navigate change, and how to use it to chase what you want. I myself
          have gone through a career change, multiple changes of company, and
          lived as an immigrant in three countries. Every move came with its own
          challenges and excitement.
        </StoryDiv>
        <StoryDiv>
          With a background in Computer Science from Oxford University, I
          entered the fast-paced tech world, thriving in the dynamic environment
          at Facebook. But after exploring different company sizes—startups,
          consultancies, and beyond, I realized my passion for coaching.
          Regardless of the technology or the organization, I saw that the core
          challenges people faced were deeply human. As a problem solver, I have
          come to believe that the most powerful part of coaching is helping
          uncover what the true problem or goal is. Only then can we efficiently
          spend our energy to reach it.
        </StoryDiv>
        <h2>Coaching with me</h2>
        <StoryDiv>
          Currently I offer the following program:{" "}
          <Link to="/coaching-reinvention/">
            Reinvent Yourself After a Major Life Change
          </Link>
          . If you would like to work together on something else, we can work
          together on a plan that is designed for you. Coaching is inherently a
          personal experience. Just book a 30minute call with me here, and let's
          see how we can work together.
        </StoryDiv>

        <p>
          <LinkButton
            role="link"
            href="https://cal.com/maria-engineer/30min"
            target="_blank"
            aria-label="Go to an external site where you can book my coaching sessions"
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

        <h2>Client Stories</h2>
        <StoryDiv>
          I have worked with a diverse range of clients, from those in academia
          to entrepreneurs and startups. Here are a few of their stories:
        </StoryDiv>
        <Carousel>
          {/* <Chevron onClick={prev}>&lt;</Chevron> */}
          <StoryContainer>
            <StoryDiv>❝{clientStories[currentIndex].story}❞</StoryDiv>
            <ClientName>{clientStories[currentIndex].client}</ClientName>
            <ClientTitle>{clientStories[currentIndex].title}</ClientTitle>
          </StoryContainer>
          {/* <Chevron onClick={next}>&gt;</Chevron> */}
        </Carousel>
      </Layout>
    </>
  );
}

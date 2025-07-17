import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Credentials, LinkButton } from "../components/commonStyles";
import {
  BarefootImage,
  Gottman1Image,
  Gottman2Image,
  ICFImage,
} from "../images/image";

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

const ReviewContainer = styled.div`
  text-align: center;
  width: 80%;
  max-width: 400px;
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

const clientReviews: Array<{
  review: string;
  client: string;
  stars: number;
}> = [
  {
    review:
      "Coaching with Maria helped me to change some unhelpful long-held beliefs and see a different perspective. Maria is very good and holding a safe space and builds trust quickly which allowed me to focus on the things that really matter. She treads carefully, is considered and curious, and very wise. I would really recommend trying Maria as your coach.",
    client: "Jason H",
    stars: 5,
  },
  {
    review:
      "I’ve worked with Maria for a couple of months now and find her sessions a source of calm, comfort and inspiration to move forward with clarity. She is a brilliant balance - challenging me when I need it, as well as creating a nurturing and safe environment. If you are exploring what your future looks like, want to build a fulfilling life and career, or simply want help unpicking a challenge at work, I highly recommend working with Maria.",
    client: "Lizzie G",
    stars: 5,
  },
  {
    review:
      "Being coached by you was a transformative experience—Maria's calm, client-centered approach and ability to create reflective space helped me bring clarity to my thoughts, appreciate the power of silence, and focus on what truly matters.",
    client: "SP",
    stars: 4,
  },
  {
    review:
      "Maria is an excellent coach. She helped me find solutions to team management, changing responsibilities and navigating uncertainty in start-up development. She is patient and listens well. She always asks the best questions for me to find the best answers forward.",
    client: "Cristiana B",
    stars: 5,
  },
  {
    review:
      "She brings a rare combination of deep empathy, insightful questioning, and unwavering presence to every session. From the very beginning, I felt seen, heard, and supported—never judged.  Maria has a gift for creating a space where reflection leads to action. Her thoughtful approach helped me gain clarity on my goals, uncover limiting beliefs, and take meaningful steps forward with confidence. She challenged me when I needed it, encouraged me when I doubted myself, and consistently held space for my growth in a way that felt both powerful and personal.",
    client: "Shrikes g",
    stars: 5,
  },
  {
    review: "Lorem",
    client: "Jason H",
    stars: 5,
  },
];

const reviews = 5;

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

  const [currentIndexReview, setCurrentIndexReview] = useState<number>(0);
  const [autoScrollReview, setAutoScrollReview] = useState<boolean>(true);

  useEffect(() => {
    if (autoScrollReview) {
      const interval = setInterval(() => {
        setCurrentIndexReview((currentIndexReview + 1) % reviews);
      }, 120000);
    }
  }, [autoScrollReview]);

  const nextReview = () => {
    setAutoScrollReview(false);
    setCurrentIndexReview((currentIndexReview + 1) % reviews);
  };

  const prevReview = () => {
    setAutoScrollReview(false);
    setCurrentIndexReview(
      currentIndexReview == 0 ? reviews - 1 : currentIndexReview - 1
    );
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
          personal experience. Just book a free 30 minute call with me here, and
          let's see how we can work together.
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
        <Credentials>
          <a
            href="https://learning.gottman.com/certificates/arzi8e8lml"
            target="_blank"
          >
            <Gottman1Image />
          </a>
          <a
            href="https://learning.gottman.com/certificates/cuanlllssl"
            target="_blank"
          >
            <Gottman2Image />
          </a>
        </Credentials>

        <h2 id="reviews">Client Reviews</h2>
        <StoryDiv>
          Here's what my clients have to say about working with me:
        </StoryDiv>
        <Carousel>
          <Chevron onClick={prevReview}>&lt;</Chevron>
          <ReviewContainer>
            <StoryDiv>❝{clientReviews[currentIndexReview].review}❞</StoryDiv>
            <ClientName>{clientReviews[currentIndexReview].client}</ClientName>
            <ClientTitle>
              {clientReviews[currentIndexReview].stars == 5 ? "★★★★★" : "★★★★"}
            </ClientTitle>
          </ReviewContainer>
          <Chevron onClick={nextReview}>&gt;</Chevron>
        </Carousel>

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

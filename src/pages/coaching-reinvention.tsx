import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import { LinkButton } from "../components/commonStyles";

const StoryDiv = styled.div`
  wrap: pretty;
  font-size: 1rem;
  margin: "1rem 0";
`;

export default function ReinventionPage() {
  return (
    <>
      <SEO
        title="Reinvent Yourself After a Major Life Change"
        description="Reinvent Yourself After a Major Life Change or Setback is a 6-week coaching program designed to help you navigate life transitions such as career changes, divorce, or relocating. Through deep reflection and actionable steps, this program empowers you to embrace change, align with your core values, and take confident steps toward creating the life you desire. Whether you're dealing with job loss, relationship upheavals, or other life challenges, this program provides the tools and support you need to rebuild your life with clarity and purpose."
        keywords={[
          "life coaching",
          "career change coaching",
          "personal transformation",
          "coaching for major life changes",
          "reinvent yourself",
          "overcoming setbacks",
          "coaching for divorce",
          "coaching for expats",
          "life change coaching",
          "career transitions",
          "overcoming fear of change",
          "personal growth coaching",
          "coaching for self-discovery",
          "life coaching for professionals",
          "building confidence after setback",
          "coaching for resilience",
          "life coaching for immigrants",
          "empowerment coaching",
          "create the life you want",
          "coaching for overcoming fear",
        ]}
      />
      <Layout currentPage="Coaching">
        <h1>Reinvent Yourself After a Major Life Change</h1>
        <StoryDiv>Learn to respond to life's challenges with clarity and intention.</StoryDiv>
        <h2>What is this program about?</h2>
        <StoryDiv>
          Life has a way of throwing unexpected challenges that turn everything
          upside down. Some of these challenges we might expect, while others
          come as a complete surprise. But no matter the cause, they can all
          feel destabilizing. It's easy to slip into survival mode, grabbing at
          the first thing that feels familiar just to get through the moment.
          While this might work temporarily, it often brings us back to square
          one—just a little later on. In this coaching program, we will work
          through the emotions and confusion that arise from these changes.
        </StoryDiv>
        <StoryDiv>
          We'll create time and space for deep reflection, helping you analyze
          your values and uncover what has shifted within you during this period
          of transition. With this clarity, you will learn how to respond
          thoughtfully and intentionally to the changes in your life, rather
          than simply reacting to them.
        </StoryDiv>
        <StoryDiv>
          As Viktor Frankl famously said, “When we are no longer able to change
          a situation, we are challenged to change ourselves.” By learning to
          respond in a way that aligns with your core values and interests,
          you'll be empowered to rebuild your life and create the future you
          truly desire.
        </StoryDiv>
        <h2>Is this program for you?</h2>
        <StoryDiv>
          This program was designed from my own experiencing dealing with
          layoffs, divorce, moving countries and working with other people whose
          roles have unexpectedly changed. If you have recently been fired,
          gotten laid off, lost funding, going through a divorce, or other major
          life changes... this program will help you focus on building the life
          you want using these changes and setbacks to fuel it.
        </StoryDiv>
        <h2>The program</h2>
        <h3>Session 1: The Why?</h3>
        <StoryDiv>
          Exploring what we want and how we want our life to look
        </StoryDiv>
        <StoryDiv>
          In this first session, we'll dive into your “why”—the deeper reasons
          behind your desire for change. What is it that truly matters to you?
          What values, passions, and goals do you want to bring forward into
          this new phase of your life? This session sets the foundation for
          clarity, helping you visualize the life you want to build moving
          forward.
        </StoryDiv>

        <h3>Session 2: The What?</h3>
        <StoryDiv>
          Exploring options and aligning them with what matters most to you
        </StoryDiv>
        <StoryDiv>
          Now that you have a clearer sense of what matters, we'll explore
          different possibilities for the future. We'll assess options in both
          your personal and professional life, evaluating how they align with
          your core values. By understanding your options through this lens,
          you'll be able to make informed choices that align with your deepest
          desires.
        </StoryDiv>

        <h3>Session 3: The How?</h3>
        <StoryDiv>Turning your aspirations into actionable steps</StoryDiv>
        <StoryDiv>
          With a clearer sense of your "why" and "what," we'll now explore the
          "how." How can you start taking steps toward your vision? We'll create
          a concrete action plan, breaking down large goals into smaller,
          manageable tasks. This session will give you the tools to start making
          progress in a way that feels aligned and achievable.
        </StoryDiv>

        <h3>Session 4: The What Now?</h3>
        <StoryDiv>
          Identifying missing pieces and filling in the blanks
        </StoryDiv>
        <StoryDiv>
          At this point, you may find there are gaps between where you are and
          where you want to be. What's missing in your current plan? This
          session will help identify and address these gaps, whether they are
          skills, resources, mindset shifts, or practical steps. Together, we'll
          ensure that everything you need to succeed is in place.
        </StoryDiv>

        <h3>Session 5: The Why Nots?</h3>
        <StoryDiv>
          Overcoming fears and uncovering what's holding you back
        </StoryDiv>
        <StoryDiv>
          Change often brings fear and self-doubt. In this session, we'll tackle
          any internal barriers standing in your way. Are there fears or
          limiting beliefs preventing you from moving forward? Together, we'll
          explore these obstacles, identify their root causes, and develop
          strategies to overcome them, so you can move forward with confidence.
        </StoryDiv>

        <h3>Session 6: Feel the Fear and Do It Anyway</h3>
        <StoryDiv>Empowering you to take the leap</StoryDiv>
        <StoryDiv>
          In our final session, we'll wrap up everything you've learned and
          accomplished. You've explored your values, mapped out your path, and
          tackled your fears. Now, it's time to take action. This session is all
          about empowering you to step forward, even when fear is present, and
          to embrace the change with confidence. You'll leave this program with
          the tools, mindset, and courage to make lasting change.
        </StoryDiv>
        <h2>The Logistics</h2>
        <h3>How we start</h3>
        <StoryDiv>
          Let's book an introductory 30-minute call together to see if you think
          we're a good fit to work together. If you have any other questions,
          feel free to reach out at: hi@maria.engineer
        </StoryDiv>
        <p>
          <LinkButton
            role="link"
            href="https://cal.com/maria-engineer/30min"
            target="_blank"
            aria-label="Go to an external site where you can book the introductory call."
          >
            Work with me
          </LinkButton>
        </p>
        <h3>Cost</h3>
        <StoryDiv>
          The program is comprised of 6 sessions, each one hour long. The whole
          program will be priced at £500, to be transferred to my bank account
          upon your decision to continue. Further 1:1 sessions will be available
          upon request for £90/hour. 
        </StoryDiv>
      </Layout>
    </>
  );
}

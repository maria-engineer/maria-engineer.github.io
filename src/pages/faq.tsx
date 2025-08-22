import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

export default function FAQPage() {
  return (
    <>
      <SEO title="FAQ" />
      <Layout currentPage="Coaching" currentSubPage="FAQ">
        <h2>What is coaching?</h2>
        <p>
          Coaching is a conversation where I ask you questions to help you
          figure out what you want and how to achieve it. If I have information
          that would help you, I will ask you for permission to share it, and do
          so without any expectation that you need to use it. You know what your
          problems are best, and thus you are the best one to come up with the
          most appropriate solution for you, I am just here to help you get
          there. It's like having a good friend who's not afraid to ask the hard
          and sometimes uncomfortable questions, just that this friend is
          trained in human psychology and pattern recognition. The ICF, which is
          the certification body I am part of, defines coaching a bit more
          formally here:{" "}
          <a
            target="_blank"
            href="https://coachingfederation.org/get-coaching/coaching-for-me/what-is-coaching/"
          >
            Read the ICF's official definition of coaching
          </a>
          .
        </p>
        <h2>What type of coaching do you do?</h2>
        <p>
          My coaching is transformational. Which is coaching speech for "I focus
          on figuring out what's really blocking you and if you even want to do
          it in the first place, not just surface-level quick fixes." While my
          goal is to help my clients achieve their goals, and enable them to
          achieve their dreams, I tend to focus more on the underlying blockers.
          In other words I am here to help you identify obstacles and help you
          remove them. After that I believe that your own drive will be there to
          help you grow and succeed. I believe this enables my clients to be
          more self sufficient in the future when they encounter other blockers,
          than a more surface level, action focused style of coaching.
        </p>
        <h2>Do I need coaching?</h2>
        <p>
          No. Nobody needs coaching. That being said, I do believe most people
          can benefit from coaching.
        </p>
        <h2>What can coaching help me with?</h2>
        <p>
          Coaching can help you with a variety of personal and professional
          challenges. I generally think of coaching as a way to help answer
          questions. And those questions can be things like: Why am I not happy
          in my career? How do I resolve this conflict? How can I be a better
          leader? What should I do next in my life? What is stopping me from
          writing (writer's block)?
        </p>
        <p>
          These are all questions that exist to be answered in service of a
          goal. That goal might be writing a novel, finding more joy in your
          career, moving countries, or dating again after a difficult
          relationship. As we work together, the goal may shift and change
          shape, and that's okay. Ultimately, that's what coaching is here for:
          helping you move toward the future you want with purpose and clarity.
          And sometimes, it's okay to change what you want.
        </p>
        <h2>Why should I trust you?</h2>
        <p>
          I have over 160 hours of training with Barefoot Coaching Academy, I am
          a member of the ICF, the leading coaching certification foundation,
          and I constantly seek to supplement my knowledge through reading as
          well taking certified courses like the Gottman Relationship Therapy
          Course.{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="/coaching/#reviews"
          >
            Here is what some of my past clients said about me.
          </Link>
        </p>
        <h2>How much does it cost?</h2>
        <p>
          I charge 90£/hour, with different{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="/coaching-reinvention/"
          >
            programs
          </Link>{" "}
          having different costs.
        </p>
        <h2>Where are the coaching sessions held?</h2>
        <p>
          Most of my clients are in Europe and the US, as such my coaching
          sessions are held online via Zoom. After we talk and we agree that we
          are a good fit, I will send you a link to book them. I have found that
          even within the same city however some people find it easier to relax
          and feel safe to discuss certain topics from the safety of their own
          home over a screen. If you are in Seoul however, I am open to
          in-person walking coaching.
        </p>
        <h2>How long does each session last?</h2>
        <p>
          Most of my sessions last an hour, with walking sessions being one and
          a half hours.
        </p>
        <h2>So how do I book a call?</h2>
        <p>
          First book a free 30 minute call{" "}
          <a target="_blank" href="https://cal.com/maria-engineer/30min">
            here
          </a>{" "}
          to get to know each other and your goals. During this call I may talk
          more than during our usual coaching sessions. This call should give
          you a good idea of whether you could see yourself being coached by me.
          i.e. if we vibe. If you choose to continue, I will send you a
          different link for our regular sessions as well as a contract for you
          to sign for my records.
        </p>
        <h2>What do I need to do to have a good coaching session?</h2>
        <p>
          Openness and honesty are the two core values of my coaching. I strive
          to build a judgement free space so my clients are comfortable honestly
          sharing parts of themselves they would otherwise keep hidden. That
          being said, before our session you should have an idea as to what we
          are going to talk about. After all, how can we achieve a goal if we
          don't know what that is? Even if the goal is figuring out the goal.
        </p>
        <h2>Why would I want walking coaching?</h2>
        <p>
          Coaching while walking is not always applicable, but when the topic is
          exploration, exploring the outside can help explore our own thought
          patterns at the same time. Bonus, it is great for the physical body
          too.
        </p>
        <h2>Will what I tell you make it to anyone?</h2>
        <p>
          Everything we talk about is confidential. However if I believe you are
          in danger to harm yourself or other people, I retain the right to
          break confidentiality.
        </p>
        <h2>What if I don't think it's working?</h2>
        <p>
          That is ok. I may just not be the right coach for you. Just let me
          know, and we can end the coaching relationship. If you don't want to
          end the coaching relationship, we can spend some time together on what
          specifically is not working and see if there are changes we can make
          that would help you. If not, we can terminate the coaching
          relationship. Doesn't mean we have to lose touch completely.
        </p>
        <h2>How do I tell you I don't want to continue coaching anymore?</h2>
        <p>
          Over email is fine, I know some people wait for their next session to
          tell their coaches or therapists they don't want to continue, which is
          just costing them money to terminate a relationship.
        </p>
      </Layout>
    </>
  );
}

import React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Theatre2024 = () => (
  <>
    <SEO
      title="2024 Theatre"
      description="Hi! I'm Maria and I am a theatre buff. I wanted to share a list of the shows I have watched in 2024, what I thought, as well as the shows that I am really looking forward to."
      keywords={[
        "Theatre",
        "Upcoming",
        "Looking Forward To",
        "Theatre List",
        "London",
        "West End",
        "Recommendations",
        "What to watch",
        "shows in london",
        "shows",
        "selection",
        "ratings",
        "tracking",
        "2024",
        "this year",
        "curated list",
        "curated shows",
      ]}
    />
    <Layout currentPage="Interests" currentSubPage="Theatre">
      <h1 id="2024-shows">2024 Shows</h1>
      <h2 id="future-booked-">Booked:</h2>
      <p>
        <a
          href="https://www.barbican.org.uk/whats-on/2023/event/royal-shakespeare-company-my-neighbour-totoro"
          target="_blank"
        >
          Totoro
        </a>{" "}
        - January 20, 2024 - ★★★★★
        <br />
        <a href="https://magicmikelondon.co.uk/" target="_blank">
          Magic Mike Live
        </a>{" "}
        - March 8, 2024 - ★★★★
        <br />
        <a href="https://amirrorwestend.com" target="_blank">
          A Mirror
        </a>{" "}
        - March 9, 2024 - <Link to="/theatre/a_mirror/">★★★★★</Link>
        <br />
        <a
          href="https://events.nationaltheatre.org.uk/events/88787"
          target="_blank"
        >
          Nye
        </a>{" "}
        - March 27, 2024 - ★★★
        <br />
        <a href="https://openingnightmusical.com/" target="_blank">
          Opening Night
        </a>{" "}
        - May 6, 2024 - ★★★★
        <br />
        <a href="https://sncokorea.com/boardPost/118037/7" target="_blank">
          Dear Evan Hansen (Seoul)
        </a>{" "}
        - Jun 5, 2024 - ★★★★★
        <br />
        <a href="https://kathyandstella.com" target="_blank">
          Kathy and Stella Solve a Murder
        </a>{" "}
        - Jun 18, 2024 - ★★★★
        <br />
        <a href="https://uk.hadestown.com" target="_blank">
          Hadestown
        </a>{" "}
        - Jul 11, 2024 - ★★★★.5
        <br />
        <a href="https://www.punchdrunk.com/work/violas-room/" target="_blank">
          Viola's Room
        </a>{" "}
        - Jul 14, 2024 - ★★★★.5
        <br />
        <a href="https://hellodollyldn.com" target="_blank">
          Hello, Dolly!
        </a>{" "}
        - Jul 16, 2024 - ★★★
        <br />
        <a
          href="https://charingcrosstheatre.co.uk/theatre/marie-curie"
          target="_blank"
        >
          Marie Curie
        </a>{" "}
        - Jul 18, 2024 - ★★★.5
        <br />
        <a
          href="https://www.haroldpintertheatre.co.uk/shows/your-lie-in-april"
          target="_blank"
        >
          Your Lie in April
        </a>{" "}
        - Aug 4, 2024 - ★★★★
        <br />
        <a
          href="https://camdenfringe.com/events/things-between-heaven-and-earth/"
          target="_blank"
        >
          Things Between Heaven and Earth
        </a>{" "}
        - Aug 5, 2024 - <Link to="/theatre/heaven_and_earth/">★★★★★</Link>
        <br />
        <a
          href="https://www.barbican.org.uk/whats-on/2024/event/kiss-me-kate"
          target="_blank"
        >
          Kiss Me Kate
        </a>{" "}
        - Aug 17, 2024 - ★★★★★
        <br />
        <a
          href="https://frozenthemusical.co.uk"
          target="_blank"
        >
          Frozen
        </a>{" "}
        - Sept 1, 2024 - ★★★★★
        <br />
        <a
          href="https://www.choirofmanwestend.com"
          target="_blank"
        >
          Choir of Man
        </a>{" "}
        - Sept 13, 2024 - ★★★★
        <br />
        <a href="https://charingcrosstheatre.co.uk/theatre/one-small-step" target="_blank">
          One Small Step
        </a>{" "}
        - Oct 2, 2024 - ★★★★
        <br />
        <a href="https://space.org.uk/event/the-waiting-room-livestream/" target="_blank">
          The Waiting Room
        </a>{" "}
        - Oct 3, 2024 - ★★★★★
        <br />
        <a href="https://macbethwestend.co.uk" target="_blank">
          Macbeth
        </a>{" "}
        - Oct 7, 2024
        <br />
        <a href="https://www.youngvic.org/whats-on/face-the-crowd" target="_blank">
          A Face in the Crowd
        </a>{" "}
        - Oct 16, 2024 - ★★★★
        <br />
      </p>
      <h2 id="to-book-">To book:</h2>
      <h3 id="six">SIX</h3>
      <p>
        1h 20m / TodayTix Rush (25£)
        <br /> Vaudeville Theatre
        <br /> Had tickets for the first lock down. Need to see this at some
        point.
        <br />
        <a href="https://tickets.sixthemusical.com/city/2957-london/1DYC8-six-the-musical-vaudeville-theatre/">
          {" "}
          Tickets{" "}
        </a>
      </p>

      <h2 id="uncertain-">Uncertain:</h2>

      <h2 id="Past years">Past Years</h2>
      <h3 id="years">
        <Link to="/2023-watching-theatre/">2023</Link>
      </h3>
    </Layout>
  </>
);

export default Theatre2024;

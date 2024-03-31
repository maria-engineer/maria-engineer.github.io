import React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Theatre2023 = () => (
  <>
    <SEO
      title="2023 Theatre"
      description="Hi! I'm Maria and I am a theatre buff. I wanted to share a list of the shows I have watched in 2023, what I thought, as well as the shows that I am really looking forward to."
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
        "2023",
        "this year",
        "curated list",
        "curated shows",
      ]}
    />
    <Layout currentPage="Interests" currentSubPage="Theatre">
      <h1 id="2023-shows">2023 Shows</h1>
      <h2 id="future-booked-">Booked:</h2>
      <p>
        <a href="https://lemonstheplay.co.uk">Lemons Lemons Lemons</a> - January
        23 - <Link to="/theatre/Lemons_lemons_lemons/">★★</Link>
        <br />
        <a href="https://charingcrosstheatre.co.uk/theatre/george-takei-s-allegiance">
          Allegiance{" "}
        </a>{" "}
        - March 27 - <Link to="/theatre/allegiance/">★★★★★</Link> <br />
        <a href="https://www.operationmincemeat.com">Operation Mincemeat</a> -
        April 10 - <Link to="/theatre/operation_mincemeat/">★★★★</Link>
        <br />
        <a href="https://lyric.co.uk/shows/the-good-person-of-szechwan/">
          Good Person of Szechwan
        </a>{" "}
        - April 17 - <Link to="/theatre/good_person_szechwan/">★★★.5</Link>
        <br />
        <a href="https://theplaygroundtheatre.london/events/fragments-by-potential-difference-theatre/">
          Fragments
        </a>{" "}
        - April 22 - ★★
        <br />
        <a href="https://almeida.co.uk/whats-on/the-secret-life-of-bees/">
          The Secret Life of Bees
        </a>{" "}
        - April 28 - <Link to="/theatre/secret_life_of_bees/">★★★★★</Link>
        <br />
        <a href="https://kitkat.club/cabaret-london/">Cabaret</a> - May 1 -
        ★★★★★
        <br />
        <a href="https://newdiorama.com/whats-on/war-culture">
          War and Culture
        </a>{" "}
        - May 2 - ★★★★ <br />
        <a href="https://kingsheadtheatre.com/whats-on/thats-ace">
          That's Ace
        </a>{" "}
        - May 3 - ★★★
        <br />
        <a href="https://www.delfontmackintosh.co.uk/whats-on/oklahoma">
          Oklahoma!
        </a>{" "}
        - May 17 - <Link to="/theatre/oklahoma/">★★★★</Link>
        <br />
        <a href="https://openairtheatre.com/production/once-on-this-island">
          Once on this Island
        </a>{" "}
        - May 18 - ★★★★ <br />
        <a href="https://www.hampsteadtheatre.com/whats-on/2023/re-member-me/">
          Re-Member Me
        </a>{" "}
        - May 26 - ★★★★ <br />
        <a href="https://www.sadlerswells.com/whats-on/the-rocky-horror-show-2023/">
          Rocky Horror Picture Show
        </a>{" "}
        - June 9 - ★★★★★
        <br />
        <a href="https://openairtheatre.com/production/austentatious-2023">
          Austentatious
        </a>{" "}
        - July 16 - ★★★
        <br />
        <a href="https://openairtheatre.com/production-booking/97634">
          La Cage aux Folles
        </a>{" "}
        - July 29 - ★★★★★
        <br />
        <a href="https://parktheatre.co.uk/whats-on/the-garden-of-words">
          The Garden of Words
        </a>{" "}
        - Aug 12 - ★★★★
        <br />
        <a href="https://almeida.co.uk/whats-on/a-mirror/">A Mirror</a> - Sept 2
        - <Link to="/theatre/a_mirror/">★★★★★</Link>
        <br />
        <a href="https://events.nationaltheatre.org.uk/events/86816">
          The Effect
        </a>{" "}
        - Sept 13 - ★★★★
        <br /> <a href="https://www.hampsteadtheatre.com/whats-on/2023/anthropology/">
          Anthropology
        </a>{" "}
        - Sept 27 - ★★★★
        <br /> <a href="https://www.hampsteadtheatre.com/whats-on/2023/nineteen-gardens/">
          Nineteen Gardens
        </a>{" "}
        - Nov 23 - ★★★★
        <br /> <a href="https://www.hampsteadtheatre.com/whats-on/2023/rock-n-roll/">
          Rock'n'Roll
        </a>{" "}
        - Dec 9 - ★★★
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

    </Layout>
  </>
);

export default Theatre2023;

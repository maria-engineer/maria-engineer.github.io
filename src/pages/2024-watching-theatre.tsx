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

      <h3 id="Hello Dolly">Hello Dolly (July 6 - September 14)</h3>
      <p>
        TBA / 20-140£
        <br /> London Palladium
        <br /> Imelda Staunton. She was amazing in Gypsy, and as much as I hated
        both Rose and her better known role as Umbridge, one cannot deny her
        ability as an actress. I am also quite partial to the music in this
        musical, so it feels like a no-brainer.
        <br />
        <a href="https://ticketing.lwtheatres.co.uk/event/364" target="_blank">
          {" "}
          Tickets{" "}
        </a>
      </p>

      <h3 id="Hadestown">Hadestown (February 10 - ? )</h3>
      <p>
        TBA / 20-120£
        <br /> Lyric Theatre
        <br /> This was a sellout back when it started at the National theatre,
        and it sure made the waves on Broadway. The show has finally returned to
        the West End.
        <br />
        <a
          href="https://ticketing.nimaxtheatres.com/tickets/series/LYHDT01M?promo=HDTWEB&qitq=fc558381-26e5-48b1-aa9e-1e3a2f5a1e98&qitp=5ac9c109-949b-4cbf-89e4-1390109ad763&qitts=1702237994&qitc=nimaxtheatres&qite=lyrhad01mhdtweb&qitrt=Safetynet&qith=19027dde1931f58db03a9b6a70ce81d4"
          target="_blank"
        >
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

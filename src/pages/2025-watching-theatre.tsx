import React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Theatre2025 = () => (
  <>
    <SEO
      title="2025 Theatre"
      description="Hi! I'm Maria and I am a theatre buff. I wanted to share a list of the shows I have watched in 2024, what I thought, as well as the shows that I am really looking forward to."
      keywords={[
        "Theatre",
        "Upcoming",
        "Looking Forward To",
        "Theatre List",
        "Seoul",
        "Recommendations",
        "What to watch",
        "shows in seoul",
        "shows",
        "selection",
        "ratings",
        "tracking",
        "2025",
        "this year",
        "curated list",
        "curated shows",
      ]}
    />
    <Layout currentPage="Interests" currentSubPage="Theatre">
      <h1 id="2025-shows">2025 Shows</h1>
      <h2 id="future-booked-">Booked:</h2>
      <p>
        <a
          href="https://www.aladdinthemusical.co.kr"
          target="_blank"
        >
          Aladdin
        </a>{" "}
        - January 17, 2025 - ★★★★
        <br />
        <a href="https://timeticket.co.kr/product/5781" target="_blank">
          Welcome to the Hyunamdong Bookstore (어서 오세요, 휴남동 서점입니다)
        </a>{" "}
        - June 7, 2025 - ★★★★
        <br />
        <a
          href="https://www.shownote.com/Ticket/Performance/Details?performanceId=360"
          target="_blank"
        >
          Memphis
        </a>{" "}
        - June 17, 2025 - ★★★★★
        <br />
        <a href="https://www.ntck.or.kr/en/performance/info/257256" target="_blank">
          Twelfth Night
        </a>{" "}
        - June 20, 2025 - ★★★★
        <br />
        <a href="https://www.sac.or.kr/site/eng/show/show_view?SN=60369#n" target="_blank">
          Shakespeare in Love
        </a>{" "}
        - July 23, 2024 - ★★★★
        <br />
        <a href="https://www.doosanartcenter.com/en/performance/1516" target="_blank">
          Bare
        </a>{" "}
        - September 11, 2024 - ★★★★★
        <br />
        <a href="https://themckithanhotel.com/kor/teaser.php" target="_blank">
          Sleep No More
        </a>{" "}
        - October 10, 2024 - ★★★★
        <br />
        <a href="https://english.visitkorea.or.kr/svc/sp/kperformance/contentsView.do?menuSn=894&dataSetId=91&vcontsId=201587" target="_blank">
          Vampire X Hunter
        </a>{" "}
        - October 25, 2024 - ★★★
        <br />
        <a href="https://triple.global/en/ticket/places/16000325/products/25009941" target="_blank">
          Shadow
        </a>{" "}
        - October 26 , 2024 - ★★★★★
        <br />
        <a href="https://triple.global/en/ticket/places/25001155/products/25013145" target="_blank">
          RENT
        </a>{" "}
        - November 15, 2024 - ★★★★★
        <br />
        <a href="https://triple.global/en/ticket/genre/MUSICAL/products/25011300" target="_blank">
          Almond
        </a>{" "}
        - November 28, 2025 - ★★★★
        <br />
        <a href="https://triple.global/en/ticket/places/24001634/products/25013804" target="_blank">
          Life of Pi
        </a>{" "}
        - December 6, 2025 - ★★★★
        <br />
        <a href="https://interparkglobal.com/en/ticket/places/23000860/products/25015688" target="_blank">
          Bonnie and Clyde
        </a>{" "}
        - December 12, 2025 - ★★★★.5
        <br />
      </p>
      <h2 id="to-book-">To book:</h2>

      <h2 id="uncertain-">Uncertain:</h2>

      <h2 id="Past years">Past Years</h2>
      <h3 id="years">
        <Link to="/2023-watching-theatre/">2023</Link>{" "}
        <Link to="/2024-watching-theatre/">2024</Link>
      </h3>
    </Layout>
  </>
);

export default Theatre2025;

import React from "react";

import Layout from "../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/fontawesome-free-solid";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import SEO from "../components/seo";

const ArtPage = () => (
  <>
    <SEO title="Art" />
    <Layout currentPage="Interests" currentSubPage="Art">
      <h2>Collaboration</h2>
      <p>
        I recently did a collaboration with{" "}
        <a href="https://www.facebook.com/WalrusFacts/" target="_blank">
          Walrus Facts
        </a>{" "}
        to create designs for merchandise they could use to gather donations for
        charities. You can find them{" "}
        <a href="https://www.redbubble.com/people/walrusfacts/shop">here</a>.
      </p>
      <p className="d-flex ">
        <iframe
          src="https://www.instagram.com/p/CBl1hqeFjxT/embed"
          width="400"
          height="450"
          style={{ borderRadius: "20px 20px", marginRight: "20px" }}
          frameBorder="0"
          scrolling="no"
          marginWidth={20}
          allowTransparency={true}
        ></iframe>
        <iframe
          src="https://www.instagram.com/p/CBRHkcYFG6A/embed"
          width="400"
          height="450"
          style={{ borderRadius: "20px 20px" }}
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
        ></iframe>
      </p>
      <h2> Accounts:</h2>
      <div className="d-flex justify-content-start">
        <a
          data-toggle="tooltip"
          title="Instagram Account"
          href="https://www.instagram.com/bunnylol.me/?hl=en"
          target="_blank"
          className="small-button cornblue go-moonbeam"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          data-toggle="tooltip"
          title="RedBubble Account - All profits from sales go to Refuge UK"
          href="https://www.redbubble.com/people/Bunnylol/shop?asc=u"
          target="_blank"
          className="small-button cornblue go-moonbeam"
        >
          <FontAwesomeIcon icon={faGift} />
        </a>
      </div>
    </Layout>
  </>
);

export default ArtPage;

import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link, navigate } from "gatsby";
import MapChart from "../components/map";
import { useState, useEffect } from "react";
import GoogleContext from "../components/GoogleContext";
import { Listing } from "../components/commonStyles";

export default function TheatrePage({
  data: {
    allMdx: { edges },
  },
}) {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    if (!google) {
      if (window.google) {
        setGoogle(window.google);
      }
    }

    return () => {
      let script = document.getElementById("googleChartsScript");
      if (script) {
        script.remove();
      }
    };
  }, [google]);

  const plays = [
    ["Country", "Title - Author"],
    ["Argentina", "Kiss of the Spider Woman(play) - Manuel Puig"],
    ["Czech Republic", "R.U.R. - Karel Capek"],
    ["France", "A Flea in her Ear - Georges Feydeau"],
    ["Germany", "Spring's Awakening - Frank Wedekind"],
    ["Greece", "Lysistrata - Aristophanes"],
    ["Iran", "White Rabbit, Red Rabbit - Nassim Soleimanpour"],
    ["Ireland", "Waiting for Godot - Samuel Beckett"],
    ["Japan", "Garden of Words - Makoto Shinkai"],
    ["Malta", "Blanket Ban - Marta Vella & Davinia Hamilton"],
    ["Norway", "Hedda Gabler - Henrik Ibsen"],
    ["Poland", "Nineteen Gardens - Magdalena Miecznicka"],
    ["Romania", "Macbett - Eugene Ionesco"],
    ["South Korea", "The Apology - Kyo Choi"],
    ["Switzerland", "The Physicists - Friedrich Durrenmatt"],
    ["United Kingdom", "Pygmalion - George Bernard Shaw"],
    ["United States", "The Nether - Jenifer Haley"]
  ];

  const posts = edges
    .map((edge) => edge?.node?.frontmatter)
    .filter((edge) => edge != null);

  return (
    <Layout currentPage="Interests" currentSubPage="Theatre">
      <SEO
        title="Theatre around the world"
        description={
          "A world map keeping track of where from I've read or watched plays from. With Reviews"
        }
        keywords={[
          "Plays",
          "World",
          "Map",
          "World Map",
          "Challenge",
          "Around The World",
          "Theatre",
          "Reviews",
        ]}
      />
      <GoogleContext.Provider value={{ google, setGoogle }}>
        <h2>Reviews</h2>
        {posts?.map((post, index) => (
          <Listing
            key={"theatre" + index}
            onClick={() => navigate(post.slug)}
            aria-label={"Navigate to the review for: " + post.title}
          >
            <div>★ {post.subcategory}</div>
            <div>{post.title}</div>
            <div>{post.date}</div>
          </Listing>
        ))}
        <Link to="/2024-watching-theatre/">
          <h3>Shows I'm watching out for in 2024</h3>
        </Link>
        <div>
          <h2>Plays Around the World</h2>
          <div>
            I am counting both plays I have seen performed as well as plays I
            have read.
          </div>
          <MapChart data={plays} id="play" />
        </div>
      </GoogleContext.Provider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: "theatre" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            subcategory
          }
        }
      }
    }
  }
`;

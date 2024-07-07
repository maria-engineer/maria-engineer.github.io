import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, navigate } from "gatsby";
import MapChart from "../components/map";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState, useEffect } from "react";
import GoogleContext from "../components/GoogleContext";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const RecipeCard = styled.button`
  display: block;
  margin: 10px 10px 0px 0px;
  width: 200px;
  height: 250px;
  padding: 0px 5px 5px 5px;
  border-radius: 26px;
  align-items: start;
  background-color: hsl(233, 8%, 19%);
  justify-content: center;
  border-width: 0;
  text-decoration: none important!;
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
    0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
    0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09);
`;

const RecipeTitle = styled.div`
  font-style: bold;
  font-size: 20px;
`;

const RecipeDescription = styled.div`
  font-size: 14px;
`;

export default function FoodPage({
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
    ["Country", "Most memorable dish"],
    ["Argentina", "Steak"],
    ["Australia", "Fairy Bread"],
    ["Austria", "Strudel"],
    ["Belgium", "Chocolate"],
    ["Brazil", "Steak"],
    ["Bulgaria", "Cucumber soup"],
    ["Canada", "Poutine"],
    ["China", "Xiao Long Bao"],
    ["Cuba", "Cubano"],
    ["Egypt", "YES"],
    ["Estonia", "YES"],
    ["Ethiopia", "YES"],
    ["France", "Canele"],
    ["Georgia", "YES"],
    ["Germany", "Wurst"],
    ["Greece", "Dolmades"],
    ["Honduras", "Baleada"],
    ["Hungary", "Goulash"],
    ["India", "Kheer"],
    ["Indonesia", "YES"],
    ["Ireland", "YES"],
    ["Israel", "Hummous"],
    ["Italy", "Tiramisu"],
    ["Jamaica", "YES"],
    ["Japan", "Ramen"],
    ["Laos", "Pla Pao Gluer"],
    ["Lebanon", "YES"],
    ["Mexico", "Burrito"],
    ["Moldova", "Placinte"],
    ["Morocco", "Tagine"],
    ["Nepal", "Momo"],
    ["Netherlands", "YES"],
    ["Nigeria", "Smoked jollof rice"],
    ["North Korea", "Naengmyeon"],
    ["Norway", "YES"],
    ["Peru", "Ceviche"],
    ["Poland", "Pierogi"],
    ["Portugal", "Pastel de nata"],
    ["Romania", "Sarmale"],
    ["Russia", "Borscht"],
    ["Slovakia", "YES"],
    ["South Africa", "Biltong"],
    ["South Korea", "Gogi Guk Su"],
    ["Spain", "Paella"],
    ["Sweden", "Meatballs"],
    ["Switzerland", "Fondue"],
    ["Thailand", "Beef & cucumber curry"],
    ["Turkey", "Baklava"],
    ["United Kingdom", "YES"],
    ["United States", "Grits"],
    ["Vietnam", "Pho"],
  ];

  const posts = edges
    .map((edge) => edge?.node?.frontmatter)
    .filter((edge) => edge != null);

  return (
    <Layout currentPage="Interests" currentSubPage="Food">
      <SEO
        title="Food around the world"
        description={
          "A page dedicated to my love for food. Here is a list of my recipes, as well as an attempt to keep track of where I've eaten food from."
        }
        keywords={[
          "Food",
          "World",
          "Map",
          "World Map",
          "Challenge",
          "Around The World",
          "Recipe",
        ]}
      />
      <GoogleContext.Provider value={{ google, setGoogle }}>
        <h2>Recipes</h2>
        <p>
          These are all recipes I have made multiple times. Some come from my
          grandma's notebook, where I've had to experiment with some of the
          ratios of ingredients.{" "}
        </p>
        <div className="d-flex flex-wrap flex-row">
          {posts?.map((post, index) => (
            <RecipeCard
              key={"recipe" + index}
              onClick={() => navigate(post.slug)}
              aria-label={"Navigate to the recipe for: " + post.title}
            >
              {post.featuredImage?.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  css={css`
                    object: cover;
                    width: 180px;
                    height: 140px;
                    border-radius: 20px;
                  `}
                  image={getImage(
                    post.featuredImage?.childImageSharp?.gatsbyImageData
                  )}
                  alt={"Photo of " + post.title}
                />
              )}
              <RecipeTitle>{post.title}</RecipeTitle>
              <RecipeDescription>{post.description}</RecipeDescription>
            </RecipeCard>
          ))}
        </div>
        <div>
          <h2>Food Around the World</h2>
          <p>Food I have had from all around the world.</p>
          <MapChart data={plays} id="food" />
        </div>
      </GoogleContext.Provider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: "food" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            short
            category
            subcategory
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import { graphql, navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Listing } from "../components/commonStyles";

export default function BlogPage({
  data: {
    allMdx: { edges },
  },
}) {
  const posts = edges
    .map((edge) => edge?.node?.frontmatter)
    .filter((edge) => edge != null);
  const postByLog = posts.reduce((acc, value) => {
    if (!acc[value.category]) {
      acc[value.category] = [];
    }

    acc[value.category].push(value);

    return acc;
  }, {});

  return (
    <Layout currentPage="Blog" >
      <SEO title="Blog" />
      <h2>Engineering Log</h2>
      {postByLog["engineer"]?.map((post, index) => (
        <Listing
          role="link"
          key={"engineer" + index}
          onClick={() => navigate(post.slug)}
          aria-label={"Navigate to the blog post: " + post.title}
        >
          <div>{post.title}</div>
          <div>{post.date}</div>
        </Listing>
      ))}
      <h2>Personal Log</h2>
      {postByLog["personal"]?.map((post, index) => (
        <Listing
          role="link"
          key={"personal" + index}
          onClick={() => navigate(post.slug)}
          aria-label={"Navigate to the blog post: " + post.title}
        >
          <div>{post.title}</div>
          <div>{post.date}</div>
        </Listing>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
          }
        }
      }
    }
  }
`;

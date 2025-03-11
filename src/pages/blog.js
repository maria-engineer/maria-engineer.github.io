import React, { useState } from "react";
import { graphql, navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Listing } from "../components/commonStyles";

import styled from "@emotion/styled";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
`;

const BlogList = styled.div`
  height: 220px;
`;



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

  console.log(JSON.stringify(postByLog));

  const personalPostsPaged = chunkyfy(postByLog["personal"] ?? [], 5) ?? [];
  const engineeringPostsPaged = chunkyfy(postByLog["engineer"] ?? [], 5) ?? [];
  console.log(JSON.stringify(personalPostsPaged));
  console.log(JSON.stringify(engineeringPostsPaged));

  const personalPages = personalPostsPaged.length ?? 0;
  const engineeringPages = engineeringPostsPaged.length ?? 0;

  const [pPage, setPPage] = useState(0);
  const [ePage, setEPage] = useState(0);

  return (
    <Layout currentPage="Blog">
      <SEO title="Blog" />
      <h2>Personal Log</h2>
      <BlogList>
      {personalPostsPaged[pPage]?.map((post, index) => (
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
      </BlogList>
      <Navigation>
        <button
          aria-label="Previous page of personal posts."
          key="personal-back"
          disabled={pPage <= 0}
          onClick={() => {
            setPPage(pPage - 1);
          }}
        >
          {"<"}
        </button>
        <div>{pPage + 1 + "/" + personalPages}</div>
        <button
          aria-label="Next page of personal posts."
          key="personal-next"
          disabled={pPage + 1 >= personalPages}
          onClick={() => {
            setPPage(pPage + 1);
          }}
        >
          {">"}
        </button>
      </Navigation>
      <h2>Engineering Log</h2>
      <BlogList>
      {engineeringPostsPaged[ePage]?.map((post, index) => (
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
      </BlogList>
      <Navigation>
        <button
          aria-label="Previous page of engineering posts."
          key="engineer-back"
          disabled={ePage <= 0}
          onClick={() => {
            setEPage(ePage - 1);
          }}
        >
          {"<"}
        </button>
        <div>{ePage + 1 + "/" + engineeringPages}</div>
        <button
          aria-label="Next page of engineering posts."
          key="engineer-next"
          disabled={ePage + 1 >= engineeringPages}
          onClick={() => {
            setEPage(ePage + 1);
          }}
        >
          {">"}
        </button>
      </Navigation>
      <hr/>
      <p><sup>0</sup> The humour, as always, is in the footnotes.</p>
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

function chunkyfy(arr, chunkSize) {
  const oneChunk = new Array();
  while (Array.isArray(arr) && arr.length > 0) {
    oneChunk.push(arr.slice(0, chunkSize));
    arr = arr.slice(chunkSize);
  }
  console.log(JSON.stringify(oneChunk));
  return oneChunk;
}

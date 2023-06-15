import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "@emotion/styled";

const Title = styled.h1`
  text-align: right important!;
`;

export default function Template({
  data,
  children, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter } = mdx;
  if (frontmatter.category === "food") {
    return (
      <Layout currentPage="Interests" currentSubPage={"Food"}>
        <SEO
          title={frontmatter.title}
          keywords={frontmatter.keywords}
          description={frontmatter.description}
        />
        <div className=" content">
          <Title>{frontmatter.title}</Title>
          {children}
        </div>
      </Layout>
    );
  }

  if (frontmatter.category === "theatre") {
    return (
      <Layout currentPage="Interests" currentSubPage={"Theatre Reviews"}>
        <SEO
          title={frontmatter.title + " - Theatre Review"}
          keywords={frontmatter.keywords}
          description={frontmatter.description}
        />
        <div className="content">
          <h1>{frontmatter.title}</h1>
          {children}
        </div>
        <footer className="footer go-center">
          <div>---{frontmatter.date}---</div>
          <div className="lcars-bar-slice-bottom"></div>
        </footer>
      </Layout>
    );
  }

  return (
    <Layout
      currentPage="Maria Mateescu"
      currentSubPage={
        frontmatter.category === "personal" ? "Personal Log" : "Engineering Log"
      }
    >
      <SEO
        title={frontmatter.title}
        keywords={frontmatter.keywords}
        description={frontmatter.description}
      />
      <div className="content">
        <h1>{frontmatter.title}</h1>
        {children}
      </div>
      <footer className="footer go-center">
        <div>---{frontmatter.date}---</div>
        <div className="lcars-bar-slice-bottom"></div>
      </footer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        short
        category
        description
        keywords
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXProvider } from "@mdx-js/react";

import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 420px) {
    min-font-size: 24px;
  }
  text-align: right important!;
`;

const Post = styled.div`
  padding: 10px 60px 10px 60px;
  @media (max-width: 420px) {
    padding: 10px 10px 10px 10px;
  }
  font-family: source-serif-pro, Georgia, Cambria, "Helvetica Neue",
    "Arial Narrow", serif;
  text-rendering: optimizelegibility;
  font-weight: 400;
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
        <Post>
          <Title>{frontmatter.title}</Title>
          <MDXProvider>{children}</MDXProvider>
        </Post>
      </Layout>
    );
  }

  if (frontmatter.category === "theatre") {
    return (
      <Layout currentPage="Interests" currentSubPage={"Theatre Reviews"}>
        <SEO
          title={frontmatter.title + " - Review"}
          keywords={frontmatter.keywords}
          description={frontmatter.description}
        />
        <Post>
          <Title>{frontmatter.title}</Title>
          <MDXProvider>{children}</MDXProvider>
        </Post>
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
      <Post>
        <Title>{frontmatter.title}</Title>
        <MDXProvider>{children}</MDXProvider>
      </Post>
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

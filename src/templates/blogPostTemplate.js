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
  font-family: "Poppins", "Arial Narrow", sans-serif;
  text-rendering: optimizelegibility;
  font-weight: 400;
  text-align: left;
  color: #38f;
`;

const Post = styled.div`
  padding: 10px 60px 10px 60px;
  @media (max-width: 420px) {
    padding: 10px 10px 10px 10px;
  }
  font-family: "Poppins", "Arial Narrow", sans-serif;
  text-rendering: optimizelegibility;
  font-weight: 200;
  font-style: normal;
`;

const Bar = styled.div`
  margin: 5px auto 20px auto;
  height: 10px;
  background: #38f;
  border-right: 18px solid #8bf;
  border-left: 18px solid #8bf;
  border-radius: 9px;
  padding: 0 5px;
  width: 60%;
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
        <div className="footer go-center">
          <div>---{frontmatter.date}---</div>
          <Bar/>
        </div>
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
      <div className="footer go-center">
        <div>---{frontmatter.date}---</div>
        <Bar/>
      </div>
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
        prev
        next
      }
    }
  }
`;

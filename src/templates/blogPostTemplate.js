import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark}  = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout currentPage="Blog">
    <SEO title="Blog" />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    <footer>---{frontmatter.date}---</footer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
      }
    }
  }
`
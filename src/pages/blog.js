import React from "react"
import { graphql, Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPage ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) {
  return (<Layout currentPage="Blog">
    <SEO title="Blog" />
    <h1>All posts</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Article</th>
      <th scope="col">Date</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    {edges.map(edge => edge == null  || edge.node == null? null : <tr key={edge.node.id}>
      <th scope="row"><Link to={edge.node.frontmatter.slug}>
      {edge.node.frontmatter.title}
    </Link></th>
      <td>{edge.node.frontmatter.date}</td>
      <td>{edge.node.frontmatter.category}</td>
    </tr> )}
    
  </tbody>
</table>
  </Layout>);
  }

  export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
  }`;
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ currentPage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div style={{height: `100%`,}}>
      <Header currentPage={currentPage} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 980,
          minHeight:`100%`, 
          position:`relative`,
          padding: `0 1.0875rem 1.45rem`,
          paddingBottom: "40px",
        }}
      >
        <main>{children}</main>
      </div>

      <footer className="page-footer text-center fixed-bottom" style={{
        marginTop: `2rem`,
        padding: `0.1rem 1.5rem 0.2rem`,
        backgroundColor: `#301150`,
        color: `white`,
      }}>
        © {new Date().getFullYear()}{' '} Maria Mateescu, Built with
          {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  currentPage: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout

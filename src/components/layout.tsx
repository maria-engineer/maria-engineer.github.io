/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { WholePage } from "./commonStyles";
import styled from "@emotion/styled";

import Header from "./header";

interface LayoutProps {
  currentPage?: string;
  children: React.ReactNode;
  currentSubPage?: string;
}

const MainCss = styled.div`
  background: #121212;
  color: #fff;
  
`;


export default function Layout({
  currentPage = "",
  currentSubPage = "",
  children,
}: LayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <MainCss data-bs-theme="dark">
      <Header
        currentPage={currentPage}
        siteTitle={data.site.siteMetadata?.title || `Title`}
        currentSubPage={currentSubPage}
      />
        <WholePage>
          {children}

          <footer className="page-footer go-center">
            © {new Date().getFullYear()} Maria Mateescu, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </WholePage>
    </MainCss>
  );
}

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Metadata {
  name: string;
  content: any;
  property?: undefined;
}

export default function SEO({
  description = "",
  lang = "en",
  meta = [],
  title,
  keywords = [],
}: {
  description?: string;
  title: string;
  meta?: Metadata[];
  lang?: string;
  keywords?: string[];
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <Helmet>
        <meta name={`twitter:title`} content={title} />
        <meta name={`twitter:description`} content={metaDescription} />
        <meta name={`twitter:card`} content={"summary"} />
        <meta
          name={`twitter:creator`}
          content={site.siteMetadata?.author || ``}
        />
        <meta name={`og:title`} content={title} />
        <meta name={`og:description`} content={metaDescription} />
        <meta name={`description`} content={metaDescription} />
        <meta name={"keywords"} content={keywords.join(",")} />
        <meta name={"lang"} content={lang} />
        <title>{title}</title>
      </Helmet>
    </>
  );
}

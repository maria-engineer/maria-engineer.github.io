/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
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
  const defaultKeywords: string[] = [
    "software engineer",
    "maria mateescu",
    "software engineering coach",
    "personal and executive coaching",
    "personal and professional coaching",
    "personal and professional coach",
    "tech coaching",
    "tech coach",
    "coaching in technology",
    "professional rubber duck",
    "software engineer turned coach",
  ];
  defaultKeywords.push(...keywords);

  return (
    <>
      <Helmet>
        <meta name={`description`} content={metaDescription} />
        <meta name={`twitter:title`} content={title ?? defaultTitle} />
        <meta name={`twitter:description`} content={metaDescription} />
        <meta name={`twitter:card`} content={"summary"} />
        <meta
          name={`twitter:creator`}
          content={site.siteMetadata?.author || ``}
        />
        <meta name={`og:title`} content={title ?? defaultTitle} />
        <meta name={`og:description`} content={metaDescription} />
        <meta name={"keywords"} content={defaultKeywords.join(",")} />
        <meta name={"lang"} content={lang ?? "en-GB"} />
        <title>{title}</title>
      </Helmet>
    </>
  );
}

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
    "english speaking coach",
    "romanian speaking coach",
    "english speaking coach in Seoul",
    "english speaking coach in korea",
    "life coach seoul",
    "life coach korea",
    "personal coach seoul",
    "personal coach korea",
    "business coach korea",
    "business coach seoul",
    "startup coach",
    "startup coach seoul",
    "technology coach korea",
    "technology coach",
    "technology coach seoul",
    "technology coach korea",
    "oxbridge coach",
    "Software coach", 
    "writing coach seoul",
    "Personal coach APAC",
    "English speaking coach apac",
    "Life coach apac",
    "Business coach apac",
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

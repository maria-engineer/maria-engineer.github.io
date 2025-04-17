module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Maria.Engineer - Tech Coach`,
    description: `Personal Website for Maria Mateescu - Software Engineer turned Personal and Professional Coach.`,
    author: `@maria-engineer`,
    siteUrl: "https://maria.engineer",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`, `.markdown`],
        remarkPlugins: [
          'remark-gfm',
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    // `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                })
              })
            },
            query: `
              {
                allMdx(sort: { frontmatter: { date: DESC }}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                        description
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Maria.engineer -- RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allMdx(sort: {frontmatter: {date: DESC}}) {
            edges {
              node {
                body
                frontmatter {
                slug
                category
              }
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => "https://maria.engineer",
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { edges: allNodes },
        }) => {
          const wpNodeMap = allNodes.reduce((acc, node) => {
            const { slug } = node;
            acc[slug] = node;

            return acc;
          }, {});
          const now = Date.now();
          return allPages.map((page) => {
            return { lastmod: now, ...page, ...wpNodeMap[page.path] };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
          };
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maria-engineer-website`,
        short_name: `maria`,
        start_url: `/`,
        background_color: `#121212`,
        //theme_color: `#663399`,
        display: `minimal-ui`,
        cache_busting_mode: `none`,
        icon: `src/images/musical-icon.png`, // This path is relative to the root of the site.
        content_security_policy: {
          sandbox:
            "sandbox allow-scripts; script-src 'unsafe-inline' 'self' https://www.gstatic.com",
        },
      },
    },
  ],
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(
    "./src/templates/blogPostTemplate.js"
  );
  const result = await graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              slug
              category
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  console.log(JSON.stringify(result));
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};

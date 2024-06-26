import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout currentPage="404">
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>
      You just hit a route that doesn't exist... or is under construction....
    </p>
  </Layout>
);

export default NotFoundPage;

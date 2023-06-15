import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Barlow+Condensed:wght@100..700&display=swap"
          rel="stylesheet"
          crossOrigin="true"
          crossorigin
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        <script href={withPrefix("lcars.css")} />
        <script
          type="text/javascript"
          id="googleChartsScript"
          src="https://www.gstatic.com/charts/loader.js"
        />
        <link rel="stylesheet" href={withPrefix("lcars.css")} type="text/css" />
      </Helmet>

      {props.children}
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};

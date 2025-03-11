import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";


import styled from "@emotion/styled";

const MyBody = styled.body`
  margin: 0;
  padding: 5px 20px;
  background: #121212;
  font: 400 22px/1.5 "poppins", sans-serif;
  color: #fff;
`;

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
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
      <MyBody>
        {props.children}
      </MyBody>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};

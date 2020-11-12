import React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import ProfileImage from "../components/image"
import SEO from "../components/seo"

export default function IndexPage(): JSX.Element {
    return (<Layout currentPage="Home">
        <SEO title="Home" />
        <div className="align-items-center">
            <h2>
                Current Engagements
            </h2>
            <p>I am currently working as a Software Engineer at Facebook.</p>
            <h2>About Me</h2>
            <p>Across the projects I have worked on, the ones I've been most passionate about were those where I build tools to improve developer's lives. By automating operational tasks and simplifying debugging investigations, I have found I had great efficiency gains for both myself and others.</p>
            <h2>Contact</h2>
            <div className="d-flex justify-content-start">
                <a data-toggle="tooltip" title="Link to LinkedIn." href="https://www.linkedin.com/in/maria-mateescu-1085b980" target="_blank" className="fa fa-linkedin" style={{
                    background: 'black',
                    color: `white`,
                    borderRadius: '50%',
                    textAlign: `center`,
                    padding: '10px',
                    fontSize: '20px',
                    marginLeft: '10px',
                    textDecoration: `none`,
                }}></a>
                <a data-toggle="tooltip" title="Email me." href="mailto:hi@maria.engineer" className="fa fa-envelope" style={{
                    background: 'black',
                    color: `white`,
                    borderRadius: '50%',
                    textAlign: `center`,
                    padding: '10px',
                    fontSize: '20px',
                    marginLeft: '10px',
                    textDecoration: `none`,
                }}></a>
            </div>
        </div>
    </Layout>
    );
}


import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout currentPage="Art">
    <SEO title="Art" />
    <h2>Collaboration</h2>
    <p>I recently did a collaboration with <a href="https://www.facebook.com/WalrusFacts/" target="_blank">Walrus Facts</a> to create designs for merchandise they could use to gather donations.</p>
    <h2> Accounts:</h2>
    <div className="d-flex justify-content-start">
                <a data-toggle="tooltip" title="Instagram Account" href="https://www.instagram.com/bunnylol.me/?hl=en" target="_blank" className="fa fa-instagram" style={{
                    background: 'black',
                    color: `white`,
                    borderRadius: '50%',
                    textAlign: `center`,
                    padding: '10px',
                    fontSize: '20px',
                    marginLeft: '10px',
                    textDecoration: `none`,
                }}></a>
                <a data-toggle="tooltip" title="RedBubble Account - All profits from sales go to Refuge UK" href="https://www.redbubble.com/people/Bunnylol/shop?asc=u" target="_blank" className="fa fa-gift" style={{
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
  </Layout>
)

export default NotFoundPage

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ProfileImage from "./image"

function SectionHeader({ currentPage }) {
  switch (currentPage) {
    case "Music":
      return (<p
        style={{
          background: `#313639`,
          marginBottom: `1.45rem`,
        }}
      >
        <div className="d-flex justify-content-end" style={{
          width: "90%",
          paddingBotton: "2px",
        }}>
          <div>
            <Link
              to="/scales/"
              style={{
                color: `#DDE5ED`,
                fontWeight: "bold",
                textDecoration: `none`,
              }}
            >
              {"Scales"}
            </Link>
          </div>
          <p className="pl-2" >
            <Link
              to="/chords/"
              style={{
                color: `#DDE5ED`,
                fontWeight: "bold",
                textDecoration: `none`,
              }}
            >
              {"Chords"}
            </Link>
          </p>
        </div>
      </p>);
    case "Home":
      return (<div
        style={{
          background: `black`,
          width: "100%",
          marginBottom: `1.45rem`,
          paddingBottom: "15px",
        }}>
        <div className="d-flex justify-content-center align-items-center" style={{
          width: "90%",
          paddingBotton: "15px",
        }}>
          <div className="pr-5">
            <h1 style={{
              color: `white`,
              textDecoration: `none`,
            }}>Maria Mateescu</h1>
            <h2 style={{
              color: `white`,
              textDecoration: `none`,
            }}>Software Engineer</h2>
          </div>
          <ProfileImage /></div>
      </div>)
    case "Art":
      return (<p
        style={{
          background: `#313639`,
          marginBottom: `1.45rem`,
        }}
      >
        <div className="d-flex justify-content-end" style={{
          width: "90%",
          color: `#DDE5ED`,
          fontWeight: "bold",
          paddingBotton: "2px",
        }}>
          <div>
            Under Construction
          </div>
        </div>
      </p>);
    case "Blog":
      return <div style={{
        background: `black`,
        marginBottom: `1.45rem`,
      }}/>
    default:
      return null;
  }
}

const Header = ({ currentPage, siteTitle }) => {
  const title = currentPage ?? siteTitle ?? "Home";
  return (<div>
    <header
      style={{
        background: `black`,
        marginBottom: 0,
      }}
    >
      <div
        className={currentPage !== "Home" ? "d-flex justify-content-between" : "d-flex justify-content-center "}
        style={{
          paddingTop: "5px",
          width: "90%",
        }}
      >
        {currentPage !== "Home" && <h1 className="align-self-start pl-5" >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
        </h1>}
        <div className={currentPage !== "Home" ? "d-flex flex-wrap justify-content-end align-self-center flex-grow-1" : "d-flex flex-wrap justify-content-around align-self-center "} >
          <h4 className=" pl-5" >
            <Link
              to="/"
              style={{
                color: `#ABC7C9`,
                textDecoration: `none`,
                fontWeight: `normal`,
              }}
            >
              {"Home"}
            </Link>
          </h4>
          <h4 className="pl-5" >
            <Link
              to="/scales/"
              style={{
                color: `#ABC7C9`,
                textDecoration: `none`,
                fontWeight: `normal`,
              }}
            >
              {"Music"}
            </Link>
          </h4>
          <h4 className="pl-5" >
            <Link
              to="/art/"
              style={{
                color: `#ABC7C9`,
                textDecoration: `none`,
                fontWeight: `normal`,
              }}
            >
              {"Art"}
            </Link>
          </h4>
          <h4 className="pl-5" >
            <Link
              to="/blog/"
              style={{
                color: `#ABC7C9`,
                textDecoration: `none`,
                fontWeight: `normal`,
              }}
            >
              {"Blog"}
            </Link>
          </h4>
        </div>
      </div>
    </header>
    <SectionHeader currentPage={currentPage} />
  </div>);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  currentPage: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  currentPage: ``,
}

export default Header

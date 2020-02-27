import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FooterStyle = styled.div`
  .footer {
    background: ${props => props.theme.color.light};
    color: ${props => props.theme.color.link};
    padding: 20px 0;
    font-weight: bold;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

		i {
			display: inline-block;
			margin: 0 5px;
			color: red;

		}
			.fa-coffee {
				color: ${props => props.theme.color.yellow};
			}
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <FooterStyle>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Build with <i className="fas fa-heart"></i> and
              <i className="fas fa-coffee"></i> by {""} 
              {data.site.siteMetadata.author}
              &copy; 2020
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  )
}

export default Footer

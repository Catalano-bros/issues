import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logo.svg'
import Links from '../constants/links'
import { graphql, useStaticQuery } from 'gatsby'
import Footer from '../components/Footer'

const Navbar = () => {
  const {
    allMdx: { nodes: posts },
  } = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        nodes {
          excerpt
          frontmatter {
            title
            author
            slug
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="mdx logo" />
          </Link>
        </div>
        <Links styleClass="nav-links">
          <ul>
            {posts.map(post => (
              <li key={post.id} className="issues-links">
                <Link to={`/posts/${post.frontmatter.slug}`}>
                  {post.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </Links>
        <Footer />
      </div>
    </nav>
  )
}

export default Navbar

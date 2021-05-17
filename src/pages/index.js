import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="homepage">
        <GatsbyImage image={getImage(data.file)} alt="logo fevver" />
        <h1>titolo</h1>
        <p>paragrafo</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "Fevvers.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          quality: 100
        )
      }
    }
  }
`

export default IndexPage

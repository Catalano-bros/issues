/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { FaBars } from 'react-icons/fa'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div style={{ width: '100vw' }}>
      <div className="nav-small">
        <div>MDX</div>
        <button className="toggle-btn" onClick={toggle}>
          <FaBars></FaBars>
        </button>
      </div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <section className="center-page">{children}</section>
    </div>
  )
}

export default Layout

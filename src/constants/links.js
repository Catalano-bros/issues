import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <div style={{ width: '100%' }}>
          <Link to="/posts" className="page-link">
            Issues
          </Link>
        </div>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
    </ul>
  )
}

export default Links

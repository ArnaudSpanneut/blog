import React from "react"
import { Link } from "gatsby"

export const Layout = ({ location, title, social, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a href={social?.twitter}>Twitter</a> -{" "}
        <a href={social?.linkedIn}>LinkedIn</a> -{" "}
        <a href={social?.github}>GitHub</a>
      </footer>
    </div>
  )
}

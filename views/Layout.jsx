/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/css/favicon.ico" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/application.css" />

        <script defer src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" />
        <script defer src="/js/application.js" />
        <title>Karaoke</title>
      </head>

      <body>
        <div className="container">
          <header role="banner">
            <a className="title" href="/">Karaoke</a>
            <a href="/entries/new" className="signup button">Sign up to Karaoke</a>
          </header>

          {children}

          <footer role="siteinfo">
            <span className="legal">Important Legal Information</span>
          </footer>
        </div>
      </body>

    </html>
  );
};

require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

module.exports = function renderTemplate(component, props, res) {
  const el = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(el);
  res.write('<!DOCTYPE html>');
  res.end(html);
};

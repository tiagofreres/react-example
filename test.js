const React = require('react');
const render = require('react-dom').render;

var App = React.createClass({
  render: () => (<h1>Hello World</h1>),
});

render(<App />, document.getElementById('app'));

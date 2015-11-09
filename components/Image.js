import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class Image extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { sourceLoaded: false }
  }

  onLoad() {
    this.setState({
      sourceLoaded: true
    });
  }

  componentDidMount() {
    const image = new Image();
    image.src = this.props.source;
    image.onload = this.onLoad;
  }

  render() {
    const { source, name } = this.props;
    const { sourceLoaded } = this.state;
    return (
        <img src={sourceLoaded ? source : ''}
          alt={name}
          onLoad={onLoad} />;
    )
  }
}

Image.propTypes = {
  source: PropTypes.string.isRequired
}

export default Image

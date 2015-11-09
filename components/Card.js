import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class Card extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { selected: false };
  }
  render() {
    const { source, name, onClick } = this.props;
    const { selected } = this.state;
    return (
        <img className={card: true, selected}
          src={source}
          alt={name}
          onClick={onClick} />;
    )
  }
}

Card.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default Card

import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class Card extends Component {
  onClick() {
    this.props.onSelect(this.props.id);
  }

  render() {
    const { source, name, selected, choosed } = this.props;
    return (
        <figure className={classnames({selected, choosed})}>
          <img
            src={source}
            alt={name}
            onClick={() => this.onClick()} />
        </figure>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  choosed: PropTypes.bool.isRequired,
  onChoose: PropTypes.func
}

export default Card

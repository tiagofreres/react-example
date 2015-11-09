import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import Card from './Card'

class CardList extends Component {
  render() {
    const { cards, onSelect: onSelectCard, onChoose: onChooseCard } = this.props;
    return (
      <ul>
        {
          cards.map(card =>
            <Card key={card.id} {...card} onSelect={onSelect} onChoose={onChoose} />
          )
        }
      </ul>
    )
  }
}

CardList.propTypes = {
  onSelectCard: PropTypes.func.isRequired,
  onChooseCard: PropTypes.func.isRequired,
  cards: propTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    choosed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
}

export default CardList

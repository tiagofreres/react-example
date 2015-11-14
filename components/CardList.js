import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import Card from './Card'

class CardList extends Component {
  componentWillMount() {
    console.dir(this.props);
  }
  render() {
    const { cards, onSelectCard, onChooseCard } = this.props;
    return (
      <ul>
        {
          cards.map(card =>
            <Card key={card.id} {...card} onSelect={onSelectCard} onChoose={onChooseCard} />
          )
        }
      </ul>
    )
  }
}

CardList.propTypes = {
  onSelectCard: PropTypes.func.isRequired,
  onChooseCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    choosed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
}

export default CardList

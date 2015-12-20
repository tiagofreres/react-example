import React, { PropTypes, Component } from 'react'
import Card from './Card'
import { SHOW_ALL, SHOW_SELECTED, SHOW_UNSELECTED } from '../constants/CardFilterTypes'
import classnames from 'classnames'

const CARD_FILTER = {
  [SHOW_ALL]: card => card,
  [SHOW_SELECTED]: card => card.selected,
  [SHOW_UNSELECTED]: card => !card.selected
};

class CardList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {filteredView: SHOW_ALL};
  }

  onShow(filter) {
    this.setState({filteredView: filter});
  }

  renderFilter(filter) {
    const { filteredView } = this.state;
    return (
      <a className={classnames({selected: filteredView === filter})}
        onClick={this.onShow.bind(this, filter)}>
        {filter}
      </a>
    );
  }

  render() {
    const { cards, onSelectCard, onChooseCard } = this.props;
    const { filteredView } = this.state;
    return (
      <div>
        {[SHOW_ALL, SHOW_SELECTED, SHOW_UNSELECTED].map(
            filter => this.renderFilter(filter)
        )}
        <ul>
          {cards.filter(CARD_FILTER[filteredView])
            .map(card =>
              <Card key={card.id} {...card}
                onSelect={onSelectCard}
                onChoose={onChooseCard} />
          )}
        </ul>
      </div>
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

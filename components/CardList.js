import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import Card from './Card'

class CardList extends Component {
  filterByName(cards, name) {
    const search = new RegExp(name);
    return cards.filter(card => search.test(card.name));
  },
  render() {
    const { cards, nameToSearch } = this.props;

    return (
      <ul>
        {
          this.filterByName(cards, nameToSearch).
            map(card => <Card key={card.id}
              name={card.name}
              source={card.source} />
            )
        }
      </ul>
    )
  }
}

CardList.propTypes = {

}

export default CardList

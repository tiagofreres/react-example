import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import * as cardActions from '../actions/cards'
import request from '../utils/ajax'
import { HEARTHSTONE_API } from '../config'

class App extends Component {
  componentWillMount() {
    console.dir(this.props);
  }
  componentDidMount() {
    let url = HEARTHSTONE_API.ENDPOINT + HEARTHSTONE_API.ACTIONS.CARDS;
    let headers = [
      {name: HEARTHSTONE_API.KEY.HEADER, value: HEARTHSTONE_API.KEY.HASH}
    ];
    request(url, (results) => (console.dir(results)), headers);
  }
  render() {
    const { cards, filteredView, actions } = this.props
    return (
      <div>
        <CardList cards={cards} {...actions}
          filteredView={filteredView}
          onShow={(filter) => (console.log(filter))} />
      </div>
    )
  }
}

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    choosed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cardActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

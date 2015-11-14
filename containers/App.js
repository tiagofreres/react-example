import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import * as cardActions from '../actions/cards'

class App extends Component {
  componentWillMount() {
    console.dir(this.props);
  }
  componentDidMount() {
    console.log('App mounted');
  }
  render() {
    const { cards, actions } = this.props
    return (
      <div>
        <CardList cards={cards} {...actions} />
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
    id: PropTypes.number.isRequired
  })).isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cardActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

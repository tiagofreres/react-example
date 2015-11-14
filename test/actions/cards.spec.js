import expect from 'expect'
import * as types from '../../constants/CardsActionTypes'
import * as actions from '../../actions/cards'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: types.ADD_TODO,
      text: 'Use Redux'
    })
  })
})

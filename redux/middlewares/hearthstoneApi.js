import request from './ajax'
import { curry, compose } from 'ramda'

const PARAM_TYPE = {
  ATTACK: 'attack',
  CALLBACK: 'callback',
  COLLECTIBLE: 'collectible',
  COST: 'cost',
  DURABILITY: 'durability',
  HEALTH: 'health',
  LOCATION: 'location'
};

const HEARTHSTONE_API = {
  ENDPOINT: 'https://omgvamp-hearthstone-v1.p.mashape.com',
  API_KEY: {
    name: 'X-Mashape-Key'
    value: 'L4r99WiaNImshuZyTTq7M9ty2b3fp1PlTAljsnW4dDMvzH3xxe'
  },
  ACTIONS: {
    allCards: {
      path: '/cards',
      params: [
        PARAM_TYPE.ATTACK,
        PARAM_TYPE.CALLBACK,
        PARAM_TYPE.COLLECTIBLE,
        PARAM_TYPE.COST,
        PARAM_TYPE.DURABILITY,
        PARAM_TYPE.HEALTH,
        PARAM_TYPE.LOCATION
      ]
    },
    cardBacks: {},
    cardSearch: {},
    cardSet: {},
    cardsByClass: {},
    cardsByFaction: {},
    cardsByQuality: {},
    cardsByRace: {},
    cardsByType: {},
    info: {},
    singleCard: {}
  }
};

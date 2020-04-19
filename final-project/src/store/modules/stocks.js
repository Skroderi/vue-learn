const state = {
  stocks: [],
  defaultStocks: [{
      id: 0,
      name: "BMW",
      price: 75
    },
    {
      id: 1,
      name: "Apple",
      price: 105
    },
    {
      id: 2,
      name: "Google",
      price: 56
    },
    {
      id: 3,
      name: "Twitter",
      price: 97
    }
  ],
}


const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {

  }
};

const actions = {
  buy: ({
    commit
  }, boughtStock) => {
    commit()
  },
  initStocks: ({
    commit
  }) => {
    commit('SET_STOCKS', state.defaultStocks)
  },
  randomizeStocks: ({
    commit
  }) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}

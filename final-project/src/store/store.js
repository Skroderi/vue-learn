import Vue from "vue";
import Vuex from "vuex";
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
  // state: {
  //   founds: 10000,
  //   stocks: [{
  //       name: "BMW",
  //       price: 75
  //     },
  //     {
  //       name: "Apple",
  //       price: 105
  //     },
  //     {
  //       name: "Google",
  //       price: 56
  //     },
  //     {
  //       name: "Twitter",
  //       price: 97
  //     }
  //   ],
  //   portfolioStocks: []
  // },
  // getters: {
  //   buy: (state, price) => {
  //     console.log(state.counter);

  //     return state.counter = state.counter - price

  //   }
  // }
});

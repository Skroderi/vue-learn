import Homepage from './components/Homepage'
import Stocks from './components/Stocks'
import Portfolio from './components/Portfolio'


export const routes = [{
    path: '',
    component: Homepage
  },
  {
    path: '/stocks',
    component: Stocks
  },
  {
    path: '/portfolio',
    component: Portfolio
  }
]

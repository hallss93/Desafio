import { combineReducers } from 'redux';

import categories from './categories/reducer';
import products from './products/reducer';

export default combineReducers({
  categories,
  products,
});

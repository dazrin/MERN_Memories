import { combineReducers } from 'redux'; // combines all reducers

import posts from './posts'; // imports posts object

// export reducers for index.js
export default combineReducers({ posts });
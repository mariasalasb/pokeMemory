import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import PokeReducer from './reducers/poke.reducer';

const RootReducer = combineReducers({
  pokemons: PokeReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
import { POKEMONS } from '../../data/pokemons';
import { CONFIRM_POKE } from '../actions/poke.actions';

const INITIAL_STATE = {
  items: POKEMONS,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CONFIRM_POKE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default CartReducer;
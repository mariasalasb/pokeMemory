export const CONFIRM_POKE = 'CONFIRM_POKE';

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});

export const confirmPoke = () => {
  return async dispatch => {
    try {
      dispatch({
        type: CONFIRM_POKE,
      });
    } catch(error) {
      console.log(error.message);
    }
  }
}
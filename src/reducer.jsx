import { CallToActionSharp } from "@mui/icons-material";

export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      const item = state.basket.find((item) => item.id === action.item.id);
      return {
        ...state,
        basket: [...state.basket, item ? (item.quantity += 1) : action.item],
      };

      break;
    case "REMOVE_FROM_BASKET":
      //logic for remove item to basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);

        //item exists an remove
      } else {
        console.warm(
          `Can't remove product (id: ${action.id}) as its not in the basket`
        );
      }
      return { ...state, basket: newBasket };

      break;
    case "CLEAR_BASKET":
      return { ...state, basket: [] };

      break;
    case "INCREMENT_QUANTITY":
      break;
    case "DECREMENT_QUANTITY":
      break;
    default:
      return state;
  }
}

export default reducer;

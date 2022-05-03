import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initState = {
  products: [],
};

const cartReducer = (store = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...store,
        products: [...store.products, action.payload.product],
      };

    case REMOVE_PRODUCT: {
      const filteredProducts = store.products.filter(
        product => product.id !== action.payload.productId,
      );
      return {
        ...store,
        products: filteredProducts,
      };
    }

    default:
      return store;
  }
};

export default cartReducer;

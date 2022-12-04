import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems; ///neu thay doi thi moi tinh toan o duoi

////count number of products in cart
console.log(cartItemsSelector);
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => {
    return cartItems.reduce(
      (count, item) => count + Number.parseInt(item.quantity),
      0
    );
  }
);

///total of cart

export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reducer(
      (total, item) => total + item.salePrice * item.quantity,
      0
    )
);

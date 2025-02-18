// Abbiamo definito i TYPE come costanti, in modo da ricere un errore -non silezioso- in caso di discrepanze nel riferci a loro

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SELECT_BOOK = "SELECT_BOOK";
export const SET_USER = "SET_USER";

// ACTION CREATORS  ==> funzioni che ritornano l'oggetto (action)

// export const addToCartAction = () => {
//   return { type: ADD_TO_CART, payload: bookSelected };
// };
export const addToCartAction = (book) => ({ type: ADD_TO_CART, payload: book });
export const removeFromCartAction = (i) => ({ type: REMOVE_FROM_CART, payload: i });
export const selectBookAction = (book) => ({ type: SELECT_BOOK, payload: book });
export const setUserAction = (value) => ({ type: SET_USER, payload: value });

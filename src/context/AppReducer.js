export default (action, state) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // return {
      //   ...state,
      //   productCounter: action.payload + 1,
      // };
      return console.log("you clicked me");

    default:
      return state;
  }
};

const initialState = false;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK":
      return (state = true);
    case "LIGHT":
      return (state = false);
    default:
      return state;
  }
};

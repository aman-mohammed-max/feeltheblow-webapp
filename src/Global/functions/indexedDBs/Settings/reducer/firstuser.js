const initialState = true;

export const firstuser = (state = initialState, action) => {
  switch (action.type) {
    case "FU":
      return (state = true);
    case "NOFU":
      return (state = false);
    default:
      return state;
  }
};

const initialState = true;

export const runback = (state = initialState, action) => {
  switch (action.type) {
    case "RUN":
      return (state = true);
    case "NORUN":
      return (state = false);
    default:
      return state;
  }
};

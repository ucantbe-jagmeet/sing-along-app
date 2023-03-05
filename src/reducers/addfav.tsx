const initialState: any = [];

const addReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "addfav":
      state = [...state, action.payload];
      let newState = [...new Set(state)];

      return newState;

    default:
      return state;
  }
};

export default addReducer;

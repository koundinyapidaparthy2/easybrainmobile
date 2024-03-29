import { TEST_ACTION } from "../actions";

const testReducer = (state = "", action) => {
  switch (action.type) {
    case TEST_ACTION.SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default testReducer;

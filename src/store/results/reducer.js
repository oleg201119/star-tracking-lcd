import { Map, List } from "immutable";
import * as types from "./actionTypes";

const initialState = Map({ results: List() });

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESULTS_FETCHED:
      return state.merge({ results: action.results });
    default:
      return state;
  }
}

// selectors
export function getResultCategories(state) {
  return state.results.get("results").toJS();
}

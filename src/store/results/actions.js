import * as types from "./actionTypes";
import ResultService from "../../services/results";

export function fetchResultCategories(eventId, language) {
  return async (dispatch, getState) => {
    try {
      const results = await ResultService.getResultCategories(
        eventId,
        language
      );
      dispatch({ type: types.RESULTS_FETCHED, results });
    } catch (error) {
      console.error(error);
    }
  };
}

import API_ENDPOINTS from "./endpoint";

export default class ResultService {
  static async getResultCategories(id, language) {
    const url = `${
      API_ENDPOINTS.GET_RESULT_CATEGORIES
    }/${id}?language=${language}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `ResultService getResultCategories failed, HTTP status ${
          response.status
        }`
      );
    }

    const data = await response.json();
    return data;
  }
}

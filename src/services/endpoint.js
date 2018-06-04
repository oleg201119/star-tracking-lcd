const SERVER = "https://star-tracking-svc.azurewebsites.net";

const API_ENDPOINTS = {
  GET_RESULT_CATEGORIES: `${SERVER}/App/Results/ResultCategories`,
  GET_ADS: `${SERVER}/App/Results/Ads`,
  GET_RESULT_DETAIL: `${SERVER}/App/Results/ResultDetail`,
  GET_HEADER: `${SERVER}/App/Results/GetHeader`,
  GET_WINNERS: `${SERVER}/App/Results/GetWinners`
};

export default API_ENDPOINTS;

const URL = "https://challenge.agenciaego.tech/api/models/";
export const ALL_MODELS = "ALL_MODELS";
export const MODEL = "MODEL";
export const FILTER_BY_MODELS = "FILTER_BY_MODELS";
export const FILTER_BY_YEAR_AND_PRICE = "FILTER_BY_YEAR_AND_PRICE";

export const getModels = () => (dispatch) => {
  try {
    return fetch(URL)
      .then((res) => res.json())
      .then((models) => {
        dispatch({
          type: ALL_MODELS,
          payload: models,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const getModelsById = (id) => (dispatch) => {
  try {
    return fetch(`${URL}${id}`)
      .then((res) => res.json())
      .then((model) => {
        dispatch({
          type: MODEL,
          payload: model,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const filterByModels = (payload) => {
  return {
    type: "FILTER_BY_MODELS",
    payload,
  };
};

export const filterByYearAndPrice = (payload) => {
  return {
    type: "FILTER_BY_YEAR_AND_PRICE",
    payload,
  };
};

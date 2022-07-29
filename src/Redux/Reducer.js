import {
  ALL_MODELS,
  FILTER_BY_MODELS,
  MODEL,
  FILTER_BY_YEAR_AND_PRICE,
} from "./Actions";

const initialState = {
  allModels: [],
  models: [],
  model: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_MODELS: {
      return {
        ...state,
        allModels: action.payload,
        models: action.payload,
      };
    }
    case MODEL: {
      return {
        ...state,
        model: action.payload,
      };
    }

    case FILTER_BY_MODELS: {
      let models2 = [...state.allModels];
      let filterModels =
        action.payload === "all"
          ? state.allModels
          : models2.filter((e) => e.segment === action.payload);

      return {
        ...state,
        models: filterModels,
      };
    }
    case FILTER_BY_YEAR_AND_PRICE: {
      let models = [...state.allModels];
      let allModels = action.payload === "all" && models;
      let highPrice =
        action.payload === "high" &&
        models.sort((a, b) => {
          return b.price - a.price;
        });
      let lowPrice =
        action.payload === "low" &&
        models.sort((a, b) => {
          return a.price - b.price;
        });
      let youngModel =
        action.payload === "young" &&
        models.sort((a, b) => {
          return b.year - a.year;
        });
      let oldModel =
        action.payload === "old" &&
        models.sort((a, b) => {
          return a.year - b.year;
        });
      return {
        ...state,
        models: allModels || highPrice || lowPrice || youngModel || oldModel,
      };
    }
    default: {
      return { ...state };
    }
  }
}

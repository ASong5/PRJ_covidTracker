import {
  LOAD_ALL_PROVINCES_DATA,
  LOAD_CANADA_DATA,
  SET_CASE_TYPE,
  SET_PROVINCE_INPUT,
  LOAD_HISTORICAL_CANADA,
  LOAD_HISTORICAL_PROVINCES,
  SET_TYPE_INPUT
} from "../actions/canadaActions";

const reducer = (state, action) => {
    if (action.type === LOAD_CANADA_DATA){
        return{
            ...state,
            canada: action.payload
        }
    }

    if (action.type === LOAD_ALL_PROVINCES_DATA){
        return{
            ...state,
            provinces: action.payload
        }
    }

    if (action.type === SET_TYPE_INPUT){
        return{
          ...state,
          typeInput: action.payload
        }
      }
    
    if (action.type === SET_PROVINCE_INPUT){
      return{
        ...state,
        provinceInput: action.payload
      }
    }

    if (action.type === SET_CASE_TYPE){
      return{
        ...state,
        caseType: action.payload
      }
    }

    if (action.type === LOAD_HISTORICAL_PROVINCES){
      
      return{
        ...state,
        historicalProvince: action.payload
      }
    }

    return state;
    
};

export default reducer;

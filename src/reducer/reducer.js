import {
  LOAD_DATA_COUNTRIES,
  LOAD_DATA_COUNTRY,
  SET_COUNTRY_INPUT,
  SORT_COUNTRIES,
  LOAD_DATA_ALL,
  LOAD_HISTORICAL_COUNTRY,
  SET_CASE_TYPE
} from "../context/actions";
const reducer = (state, action) => {
  if (action.type === LOAD_DATA_COUNTRIES) {
    return {
      ...state,
      countries: action.payload,
    };
  }

  if (action.type === SORT_COUNTRIES) {
    let tempCountries = [state.countries];
    //tempCountries = tempCountries.sort((a,b) => a.cases - b.cases)
    return {
      ...state,
      sortedCountries: tempCountries,
    };
  }

  if (action.type === SET_COUNTRY_INPUT) {
    return {
      ...state,
      countryInput: action.payload,
    };
  }

  if (action.type === LOAD_DATA_COUNTRY) {
    if (state.countryInput === "worldwide") {
      return {
        ...state,
        country: state.all,
      };
    } else {
      const tempCountry = state.countries.filter(
        (country) => country.countryInfo.iso2 === state.countryInput
      );
      return { ...state, country: tempCountry[0] };
    }
  }

  if (action.type === LOAD_DATA_ALL) {
    return {
      ...state,
      all: action.payload,
      country: action.payload,
    };
  }

  if (action.type === LOAD_HISTORICAL_COUNTRY){
     
      return{
        ...state,
        historicalCountry: action.payload
    }
  }

  if (action.type === SET_CASE_TYPE){
      return{
          ...state,
          caseType: action.payload
      }
  }
  return state;
};

export default reducer;
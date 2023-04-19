import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  city: 'undefined' || JSON.parse(localStorage.getItem('destination')),
  dates: JSON.parse(localStorage.getItem('dates')) || [],
  options: JSON.parse(localStorage.getItem('options')) || {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

const RESET_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};
export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return {
        dates: action.payload.dates,
        options: action.payload.options,
      };
    case 'RESET_SEARCH':
      return RESET_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('dates', JSON.stringify(state.dates));
  }, [state.dates]);
  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(state.options));
  }, [state.options]);

  return (
    <SearchContext.Provider
      value={{
        destination: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

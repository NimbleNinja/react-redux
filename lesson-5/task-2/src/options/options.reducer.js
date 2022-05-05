import options from './options';
import { TOGGLE_OPTION } from './options.actions';

const initialState = {
  optionsList: options,
  selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;

      const selected = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : [...state.selected, optionId];

      return {
        ...state,
        selected,
      };
    }
    default: {
      return state;
    }
  }
};

export default optionsReducer;
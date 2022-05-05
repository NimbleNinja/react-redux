export const availableOptionsSelector = state =>
  state.options.optionsList.filter(option => !state.options.selected.includes(option.id));

export const selectedOptionsSelector = state =>
  state.options.optionsList.filter(option => state.options.selected.includes(option.id));

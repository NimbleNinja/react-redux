import './index.scss';
import { decrement, increment, reset, store } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtnElem = document.querySelector('[data-action="increment"]');
const decrementBtnElem = document.querySelector('[data-action="decrement"]');
const resetBtnElem = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtnElem.addEventListener('click', onIncrement);
decrementBtnElem.addEventListener('click', onDecrement);
resetBtnElem.addEventListener('click', onReset);

store.subscribe(() => {
  const { history } = store.getState();

  const isHistoryEmpty = history.length === 0;
  const result = isHistoryEmpty
    ? ''
    : history.map(num => (num > 0 ? `+${num}` : `${num}`)).join('');
  const value = isHistoryEmpty ? '' : history.reduce((acc, el) => acc + el);
  resultElem.textContent = isHistoryEmpty ? '' : `${result} = ${value}`;
});

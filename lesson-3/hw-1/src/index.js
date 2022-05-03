import store from './store';
import { setLanguage } from './language.actions';
import { removeUser, setUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';

store.dispatch(setLanguage('ua'));
store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: 1, name: 'Rices' }));
store.dispatch(addProduct({ id: 2, name: 'Oil' }));
store.dispatch(addProduct({ id: 3, name: 'milk' }));
store.dispatch(removeProduct(1));

console.log(store.getState());

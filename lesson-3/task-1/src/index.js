import { decrement, increment, reset } from './counter.actions';
import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';

store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(addUser({ id: 1, name: 'Tom', age: 20 }));
store.dispatch(addUser({ id: 2, name: 'Tomas', age: 21 }));
store.dispatch(addUser({ id: 3, name: 'Tomas', age: 21 }));
store.dispatch(deleteUser(1));
store.dispatch(updateUser(2, { name: 'Tom upd' }));
console.log(store.getState());

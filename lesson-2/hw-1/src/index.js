import store from './store';
import { addUser, deleteUser } from './users.actions';

const btn = document.querySelector('button');

const addUserHandler = () => {
  console.log(store.getState());
};

btn.addEventListener('click', addUserHandler);

store.dispatch(addUser({ id: 101, name: 'Tom' }));
store.dispatch(addUser({ id: 1021, name: 'Towm' }));
store.dispatch(addUser({ id: 11, name: 'Toddm' }));
store.dispatch(deleteUser(1021));

store.subscribe(() => {
  const { usersList } = store.getState();
  alert(usersList);
});

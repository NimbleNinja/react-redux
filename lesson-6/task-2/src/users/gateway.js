const url = 'https://api.github.com/users';

const fetchUser = name => fetch(`${url}/${name}`).then(response => response.json());

export default fetchUser;

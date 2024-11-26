const URL = 'https://674593ca512ddbd807f8aebb.mockapi.io/api/v1/users';

const GET_METHOD = {
  method: 'GET',
};

fetch(URL, GET_METHOD)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error:', Error);
  })
  .then((users) => console.log(users));

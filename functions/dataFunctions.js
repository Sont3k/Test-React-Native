export const fetchUsers = async () => {
  const data = await fetch('http://167.71.4.155/user/lists')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));

  console.log(data);
  return data;
};

export const fetchLocations = async () => {
  const list = [];

  for (let i = 1; i <= 20; i++) { // I know that it`s wrong
    list.push(
      await fetch('http://167.71.4.155/location/' + i)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err)),
    );
  }

  console.log(list);
  return list;
};

// export const postData = () => {
//   fetch('http://167.71.4.155/', {
//     method: 'POST',
//     headers: new Headers(),
//     body: JSON.stringify({title: 'Great'}),
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// };

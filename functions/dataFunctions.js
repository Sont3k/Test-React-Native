export const fetchUsers = async () => {
  const data = await fetch('http://167.71.4.155/user/lists')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

  console.log(data);
  return data;
};

export const fetchLocations = async () => {
  const data = await fetch('http://167.71.4.155/location/lists')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

  console.log(data);
  return data;
};

// export const postData = () => {
//   fetch('http://167.71.4.155/', {
//     method: 'POST',
//     headers: new Headers(),
//     body: JSON.stringify({title: 'Great'}),
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// };

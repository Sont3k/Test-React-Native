export const fetchData = async () => {
  const data = await fetch('http://167.71.4.155/user/lists')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));

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
//     .catch(err => console.error(err));
// };

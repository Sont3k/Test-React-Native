// User

export const fetchUsers = async () => {
  const data = await fetch('http://167.71.4.155/user/lists')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

  console.log(data);
  return data;
};

export const fetchUser = async (userID) => {
  const data = await fetch('http://167.71.4.155/user/' + userID)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

  console.log(data);
  return data;
};

export const updateUser = (userID, user) => {
  fetch('http://167.71.4.155/user/' + userID, {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const createUser = (lastUserID, user) => {
  fetch('http://167.71.4.155/user/' + (lastUserID + 1), {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const deleteUser = (userID) => {
  fetch('http://167.71.4.155/user/' + userID, {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify({}),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

// Location

export const fetchLocations = async () => {
  const data = await fetch('http://167.71.4.155/location/lists')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

  console.log(data);
  return data;
};

export const fetchLocation = async (locationID) => {
  const data = await fetch('http://167.71.4.155/location/' + locationID)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

  console.log(data);
  return data;
};

export const updateLocation = (locationID, location) => {
  fetch('http://167.71.4.155/location/' + locationID, {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify(location),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const createLocation = (lastLocationID, location) => {
  fetch('http://167.71.4.155/location/' + (lastLocationID + 1), {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify(location),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const deleteLocation = (locationID) => {
  fetch('http://167.71.4.155/location/' + locationID, {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify({}),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};




const root = "http://localhost:4000/api/";

export const loginBack = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${root}auth/login`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const bringCharacters = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=5`,
      options
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

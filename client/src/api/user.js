import axios from 'axios'

const BASE_URL = "https://cms-login-system.herokuapp.com";

export const register = async ({ username, email, password } = {}) => {
  const user = { username, email, password };
  try {
    const res = await axios.post(
      `${BASE_URL}/register`,
      JSON.stringify(user),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    return err.response.data;
  }
};


export const login = async ({ email, password }) => {
  const user = { email, password };
  try {
  const res = await axios.post(
    `${BASE_URL}/login`,
    JSON.stringify(user),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  return res.data
  } catch (err) {
	console.log(err.response.data)
	return err.response.data
  }
};


export const logout = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/logout`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
   return err.response.data;
  }
};


export const getUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/user`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
	console.log(res.data)
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_USERNAME = import.meta.env.VITE_API_USERNAME;
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

const fetchUsers = async () => {
  try {
    const authHeader = `Basic ${btoa(`${API_USERNAME}:${API_PASSWORD}`)}`;
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: authHeader,
      },
    });

    return response?.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Failed to fetch users. Please try again."
    );
  }
};

export default fetchUsers;

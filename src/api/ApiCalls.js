import axiosInstance from "./axios";

const API_KEY = "b37d972cf56e4e6c89b391eb25f105b3";

export async function getTopHeadlines(category) {
  let url;
  if (!category) {
    url = `/top-headlines?country=us&apiKey=${API_KEY}`;
  } else {
    url = `/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  }
  try {
    const response = await axiosInstance.get(
      // `/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      `${url}`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting top headlines: ", error);
    throw error;
  }
}

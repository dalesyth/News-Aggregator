import axiosInstance from "./axios";

const API_KEY = "b37d972cf56e4e6c89b391eb25f105b3";

export async function getTopHeadlines(category) {
    console.log("category from getTopHeadlines: ", category)
  console.log(
    `/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  try {
    const response = await axiosInstance.get(
      `/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    console.log("response.data from getTopHeadlines", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting top headlines: ", error);
    throw error;
  }
}

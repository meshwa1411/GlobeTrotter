import api from "./api";

export const getCities = async () => {

  const response = await api.get(
    "/cities"
  );

  return response.data;
};


export const searchCities = async (keyword) => {

  const response = await api.get(
    `/cities/search?keyword=${keyword}`
  );

  return response.data;
};


export const getCityById = async (cityId) => {

  const response = await api.get(
    `/cities/${cityId}`
  );

  return response.data;
};
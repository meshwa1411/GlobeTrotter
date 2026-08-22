import api from "./api";

export const getTrips = async () => {

  const response = await api.get("/trips");

  return response.data;
};


export const getTripById = async (tripId) => {

  const response = await api.get(
    `/trips/${tripId}`
  );

  return response.data;
};


export const createTrip = async (tripData) => {

  const response = await api.post(
    "/trips",
    tripData
  );

  return response.data;
};


export const updateTrip = async (
  tripId,
  tripData
) => {

  const response = await api.put(
    `/trips/${tripId}`,
    tripData
  );

  return response.data;
};


export const deleteTrip = async (tripId) => {

  const response = await api.delete(
    `/trips/${tripId}`
  );

  return response.data;
};


export const getTripBudget = async (tripId) => {

  const response = await api.get(
    `/trips/${tripId}/budget`
  );

  return response.data;
};


export const getTripItinerary = async (tripId) => {

  const response = await api.get(
    `/trips/${tripId}/itinerary`
  );

  return response.data;
};
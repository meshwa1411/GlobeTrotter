import api from "./api";

export const getActivities = async () => {

  const response = await api.get(
    "/activities"
  );

  return response.data;
};


export const searchActivities = async (
  keyword
) => {

  const response = await api.get(
    `/activities/search?keyword=${keyword}`
  );

  return response.data;
};


export const getActivitiesByCity = async (
  cityId
) => {

  const response = await api.get(
    `/cities/${cityId}/activities`
  );

  return response.data;
};


export const getActivityById = async (
  activityId
) => {

  const response = await api.get(
    `/activities/${activityId}`
  );

  return response.data;
};
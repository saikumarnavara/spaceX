import { spacexInstance as API } from "../utils/API";

export const SpaceXService = {
  getRocketsHistory: async () => {
    return await API.get("v4/history", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  getRockets: async () => {
    return await API.get("v4/rockets", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  getRocketsById: async (id: string) => {
    return await API.get(`v4/rockets/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  getCompanyDetails: async () => {
    return await API.get("v4/company", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};

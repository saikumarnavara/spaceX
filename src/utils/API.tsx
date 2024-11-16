import axios from "axios";

const spacexInstance = axios.create({
  baseURL: "https://api.spacexdata.com",
});

export { spacexInstance };

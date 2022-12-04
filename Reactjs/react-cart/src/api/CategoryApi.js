import axiosClient from "./AxiosClient";

const CategoryApi = {
  getAll() {
    const url = "/categories";
    return axiosClient.get(url);
  },
};

export default CategoryApi;

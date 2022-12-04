import axios from "axios";
import { rootApi } from "./rootApi";

const userApi = {
  getAllUser(page, gender) {
    const url = "students";
    return rootApi.get(url, {
      params: {
        page: page,
        gender: gender,
      },
    });
  },
  getUser(id = "lea2aa9l7x3a5v1") {
    const url = `students/${id}`;
    return rootApi.get(url);
  },
  addUser(data) {
    const url = `students`;
    return rootApi.post(url, {
      method: "POST",
      data: data,
    });
  },
};

export default userApi;

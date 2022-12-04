import request from "../untils/request";

export const searchService = async (q, type = "less") => {
  const res = await request.get(`users/search`, {
    params: {
      q: q,
      type: "less",
    },
  });

  return res.data;
};

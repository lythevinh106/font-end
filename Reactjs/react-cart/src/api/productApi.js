import axiosClient from "./AxiosClient";

const productApi = {
  async getAll(params) {
    ////vi api k đủ nên ms làm  kiểu này

    // Transform _page to _start
    const newParams = { ...params };
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);
    // Remove un-needed key
    delete newParams.page;
    // console.log(newParams);
    // Fetch product list + count
    const productList = await axiosClient.get("/products", {
      params: newParams,
    });
    const count = await axiosClient.get("/products/count", {
      params: newParams,
    });

    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params.page,
        limit: params._limit,
        total: count,
      },
    };
  },

  async get(productId) {
    const url = `/products/${productId}`;
    return await axiosClient.get(url);
  },
};
export default productApi;

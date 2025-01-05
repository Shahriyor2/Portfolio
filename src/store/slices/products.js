import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    categoriesData: [],
    records: [],
    page: 1,
    perpage: 0,
    total_count: 0,
    total_pages: 0,
    isLoading: false,
  },
  reducers: {
    categorieseData: (state, action) => {
      state.categoriesData = action.payload;
    },
    products: (state, action) => {
      state.records = action.payload.records;
      state.page = action.payload.page;
      state.perpage = action.payload.perpage;
      state.total_count = action.payload.total_count; // Должно быть правильно присвоено
      state.total_pages = action.payload.total_pages;
    },

    productsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { categorieseData, products, productsLoading } =
  productsSlice.actions;

export function getProductsCategories() {
  return async function (dispatch) {
    try {
      const {
        data: { data },
      } = await axios.get("http://10.251.4.131/kurbonoff/getCategories");
      dispatch(categorieseData(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getProducts({ page = 1 }) {
  return async function (dispatch) {
    try {
      dispatch(productsLoading(true));
      const response = await axios.get(
        `http://10.251.4.131/kurbonoff/getProducts?page=${page}`
      );

      const { data } = response.data;

      dispatch(
        products({
          records: data.records,
          page: data.page,
          perpage: data.perpage,
          total_count: data.total_count,
          total_pages: data.total_pages,
          ...data,
        })
      );
      dispatch(productsLoading(false));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(productsLoading(false));
    }
  };
}

export function getProductsByCategory(categoryId, page = 1) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://10.251.4.131/kurbonoff/getProducts?category_id=${categoryId}&page=${page}`
      );
      const { data } = response.data;
      dispatch(
        products({
          records: data.records,
          page: data.page,
          perpage: data.perpage,
          total_count: data.total_count,
          total_pages: data.total_pages,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
}

export default productsSlice.reducer;

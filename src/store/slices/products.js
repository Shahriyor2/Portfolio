import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    categoriesData: [],
    records: [],
    page: 0,
    perpage: 0,
    total_count: 0,
    total_pages: 0,
  },
  reducers: {
    updatCategorieseData: (state, action) => {
      state.categoriesData = action.payload;
    },
    updateProduts: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatCategorieseData, updateProduts } = productsSlice.actions;

export function getProductsCategories() {
  return async function (dispatch) {
    try {
      const {
        data: { data },
      } = await axios.get("http://10.251.4.131/kurbonoff/getCategories");
      dispatch(updatCategorieseData(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getProducts() {
  return async function (dispatch) {
    try {
      const {
        data: {
          data: { records },
        },
      } = await axios.get("http://10.251.4.131/kurbonoff/getProducts");

      dispatch(updateProduts({ records }));
    } catch (error) {
      console.error(error);
    }
  };
}

export default productsSlice.reducer;

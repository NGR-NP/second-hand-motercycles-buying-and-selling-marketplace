import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductsState = {
  AllProducts: AllProductsType | null;
};

const initialState: ProductsState = {
  AllProducts: null,
};

const AllProductsSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<AllProductsType>) => {
      const { count, totalPages, currentPage, products } = action.payload;
      state.AllProducts = {
        count: count ?? state.AllProducts?.count,
        currentPage: currentPage ?? state.AllProducts?.currentPage,
        totalPages: totalPages ?? state.AllProducts?.totalPages,
        products: products || [],
      };
    },
  },
});
export const { addData } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;

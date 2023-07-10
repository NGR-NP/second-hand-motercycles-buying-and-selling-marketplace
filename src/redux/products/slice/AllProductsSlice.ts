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
      state.AllProducts = action.payload;
    },
  },
});
export const { addData } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;

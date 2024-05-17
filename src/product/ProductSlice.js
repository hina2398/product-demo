import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductAPI, ProductDetailAPI } from "./ProductAPI";

const initialState = {
  loading: false,
  data: {},
  productDetail:{
    loading: false,
    data: {}
  }
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      const res = await getProductAPI();
      if (res?.status == 200) {
        return res.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const getProductDetails = createAsyncThunk("product/getProductDetails", async (productID) => {
  try{
    let res = await ProductDetailAPI(productID)
    if(res && res.status == 200){
      return res.data
    }
  }catch (e) {
    console.log(e);
  }
})

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }).addCase(getProductDetails.pending, (state) => {
        state.productDetail.loading = true
      }).addCase(getProductDetails.fulfilled, (state,action) => {
        state.productDetail.loading = false
        state.productDetail.data = action.payload
      })
  },
});

export default ProductSlice.reducer;

import { ActionTypes } from "../contants/actions-types";
export const setProduct=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
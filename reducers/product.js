import { ActionTypes } from "../contants/actions-types"

const initialState={
    products:[{
        id:1,
        title:"Red TShirt"
    }],
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
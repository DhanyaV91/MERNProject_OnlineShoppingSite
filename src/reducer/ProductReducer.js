const initialState = {
    productList: null
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            console.log(action.type)
            return {
                ...state,
                productList: action.pload
            }


        default:
            return state;
    }
}

export default productReducer;
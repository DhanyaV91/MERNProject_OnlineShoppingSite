import axios from 'axios'


export const getProducts = () =>
    async (dispatch) => {

        try {
            //console.log("Actions")
            await axios.get('http://localhost:5003/shops')
                .then(res => {
                    dispatch(
                        {
                            type: "GET_PRODUCTS",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }

    }


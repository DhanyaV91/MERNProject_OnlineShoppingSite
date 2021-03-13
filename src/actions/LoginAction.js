import axios from 'axios';

export const login = (userdata) => async (dispatch) => {
    try {
        await axios.post('http://localhost:5003/logins', userdata).then(res => {
            dispatch(
                {
                    type: "LOGIN_SUCCESS",
                    pload: res.data.token
                }
            )
        })
    } catch (error) { console.log(error); }
};
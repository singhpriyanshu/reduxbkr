import * as ActionsTypes from './ActionsTypes'

export const setLoading = (payload) => ({
    type: ActionsTypes.DISH_LOADING,
    payload
})

export const setError = (payload) => ({
    type: ActionsTypes.LOAD_DISH_FAIL,
    payload
})

export const setSuccess = () => ({
    type: ActionsTypes.LOAD_DISH_SUCESS
})

export const loadTrash = (payload) => ({
    type: ActionsTypes.LOAD_DISH,
    payload
})
export const getDish = () => {
    return dispatch => {
        dispatch(setLoading(true));
        fetch('./dishes.json')
            .then(res => {
                dispatch(setLoading(false));
                if (res.data) {
                    dispatch(setSuccess());
                    dispatch(loadTrash(res.data.data));

                }
            })
            .catch(e => {
                ('Something went wrong');
                dispatch(setLoading(false));
                dispatch(setError(e));
            });
    }
}
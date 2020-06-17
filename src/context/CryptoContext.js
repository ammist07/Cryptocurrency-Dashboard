import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case "setPage":
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
};

const setPage = (dispatch) => {
    return (data) => {
        dispatch({
            type: "setPage",
            payload: data
        })
    }
}

export const {Context, Provider} = createDataContext(
    userReducer,
    {setPage},
    {
        page: 'Dashboard'
    }
);
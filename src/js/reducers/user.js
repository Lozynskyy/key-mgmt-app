const initialState={
    data:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
        case 'FETCH_USER':
            return {
                ...state,
                loading:true
            };
        case 'FETCH_USER_SUCCESS':
            return{
                ...state,
                loading:false,
                loaded:true,
                data:action.payload
            };
        case  'FETCH_USER_FAILURE':
            return{
                ...state,
                loading:false,
                loaded:false,
                data:[]
            };
        default:
            return state
    }
}
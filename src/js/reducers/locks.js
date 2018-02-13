const initialState={
    data:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
        case 'FETCH_LOCKS':
            return {
                ...state,
                loading:true
            };
        case 'FETCH_LOCKS_SUCCESS':
            return{
                ...state,
                loading:false,
                loaded:true,
                data:action.payload
            };
        case  'FETCH_LOCKS_FAILURE':
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
const initialState={
	data:'',
	loading:false,
	loaded:false
};

export default function (state=initialState, action) {
	switch (action.type){
	case 'LOGIN_USER':
		return {
			...state,
			loading:true
		};
	case 'LOGIN_USER_SUCCESS':
		return{
			...state,
			loading:false,
			loaded:true,
			data:action.payload
		};
	case  'LOGIN_USER_FAILURE':
		return{
			...state,
			loading:false,
			loaded:false,
			data:[]
		};
	default:
		return state;
	}
}
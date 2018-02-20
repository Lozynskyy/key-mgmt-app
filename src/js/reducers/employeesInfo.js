const employeesArr = [];
for(let i=0; i<45; i++){
	employeesArr.push({
		id: i,
		surname: 'John ' + i,
		name: 'Walk ' + i,
	});	
}
const initialState={
	employeesInfo: employeesArr,
};

function employeesInfo(state = initialState, action){
	switch(action.type){
	case 'ADD_EMPLOYEE':
		  return [
		    ...state,
		    {
		    	id: action.id,
		    	surname: action.surname,
		    	name: action.name,
		    }
		  ];
	default:
		  return state;
	}
}

export default employeesInfo;
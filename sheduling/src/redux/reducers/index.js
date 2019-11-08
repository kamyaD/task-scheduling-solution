let defaultState={
  task: ""
}

const mainReducer=(state=defaultState,action)=>{
  if(action.type==="GET_TASK"){
    return{
      ...state,
    task: action.task
    } 
  }else{
    return{
      ...state
    }
  }
}

export default mainReducer;
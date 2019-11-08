import axios from "axios";

export function taskAction(){
  return(dispatch)=>{
    return axios.get("/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC").then((response)=>{
      dispatch(tasksData(response.data))
    })

  }
}

export function tasksData(task){
  return{
    type: "GET_TASK",
    task
  }
} 
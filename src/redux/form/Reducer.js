import { DELETE_FORM,SORTED_FORM,SET_DATA_TO_FORM, SUBMIT_FORM, SET_UPDATED_INDEX } from "./ActionTypes"

const Initial_State={
   FormToTable:[],
   TableToForm:{},
   Updatedindex:null
}

const Reducer=(state=Initial_State,action)=>{

  switch(action.type){
    case SUBMIT_FORM:
      if(state.Updatedindex!==null){
        const updatedForms = [...state.FormToTable]; 
        updatedForms[state.Updatedindex] = action.payload.formData;
        return{
          ...state,
          FormToTable: updatedForms,
        }
      }
      else{
        return{
          ...state,
          FormToTable:[...state.FormToTable,action.payload.formData]
     }  
      }

   case SORTED_FORM:
    return{
      ...state,
      FormToTable:action.payload
 }  

   case DELETE_FORM:
    return{
      ...state,
      FormToTable:action.payload
 } 

 case SET_DATA_TO_FORM:
  return{
     ...state,
      TableToForm:action.payload
  }
   
  case SET_UPDATED_INDEX:
  return{
     ...state,
      Updatedindex:action.payload
  }
    default: return state;
  }
}

export default Reducer
import { SUBMIT_FORM } from "./ActionTypes"
import { SORTED_FORM } from "./ActionTypes"
import { DELETE_FORM } from "./ActionTypes"
import { SET_DATA_TO_FORM } from "./ActionTypes"
import { SET_UPDATED_INDEX } from "./ActionTypes"

export function SubmitForm(formData,index){
    return{
        type:SUBMIT_FORM,
        payload:{
            formData,
            index
        }
    }
}

export function SortedForm(sortedData){
    return{
        type:SORTED_FORM,
        payload:sortedData
    }
}


export function DeleteForm(newdata){
    return{
        type:DELETE_FORM,
        payload:newdata
    }
}

export function SetDataToForm(tabledata){
    return{
        type:SET_DATA_TO_FORM,
        payload:tabledata
    
}
}

export function SetUpdatedindex(index){
    return{
        type:SET_UPDATED_INDEX,
        payload:index
    
}
}
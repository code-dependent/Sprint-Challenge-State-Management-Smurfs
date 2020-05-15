import {POST_SMURF_START,FETCH_SMURFS_START,FETCH_SMURFS_SUCCESS} from '../actions/index'

const initState = {
    smurfs:null,
    isFetching:false,
    isPosting:false

}
export const reducer = (state = initState, action)=>{
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                isFetching:true
            }
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                smurfs:action.payload
            }
        case POST_SMURF_START:
            return {
                ...state,
                isPosting:true,

            }
        
    }

}